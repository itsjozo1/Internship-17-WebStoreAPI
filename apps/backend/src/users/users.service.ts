import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  async register(email: string, password: string, name: string) {
    if (await this.prisma.user.findUnique({ where: { email } })) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    const payload = {
      id: user.id,
      email: user.email,
      role: user.isAdmin ? 'admin' : 'user',
    };

    await this.jwtService.signAsync(payload);

    return 'ok';
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new BadRequestException('User dont exist');
    }

    if (!(await compare(password, user.password))) {
      throw new ForbiddenException('Password is incorrect');
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.isAdmin ? 'admin' : 'user',
    };

    return { token: await this.jwtService.signAsync(payload) };
  }
}
