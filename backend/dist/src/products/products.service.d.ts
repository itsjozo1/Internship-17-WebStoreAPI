import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findByTitle(title: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
    }[]>;
    update(id: number, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
