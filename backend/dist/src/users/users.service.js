"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    create(createUserDto) {
        return this.prisma.user.create({ data: createUserDto });
    }
    findAll() {
        return this.prisma.user.findMany();
    }
    findOne(id) {
        return this.prisma.user.findUnique({ where: { id } });
    }
    update(id, updateUserDto) {
        return this.prisma.user.update({ where: { id }, data: updateUserDto });
    }
    remove(id) {
        return this.prisma.user.delete({ where: { id } });
    }
    async register(email, password, name) {
        if (!email || !password || !name) {
            throw new common_1.BadRequestException('Email, password, and name are required');
        }
        if (await this.prisma.user.findUnique({ where: { email } })) {
            throw new common_1.BadRequestException('User already exists');
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
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
    async login(email, password) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.BadRequestException('User dont exist');
        }
        if (!(await (0, bcrypt_1.compare)(password, user.password))) {
            throw new common_1.ForbiddenException('Password is incorrect');
        }
        const payload = {
            id: user.id,
            email: user.email,
            role: user.isAdmin ? 'admin' : 'user',
        };
        return 'ok';
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map