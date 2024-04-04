"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seed() {
    const user1 = await prisma.user.upsert({
        where: { email: 'user1@example.com' },
        update: {},
        create: {
            email: 'user1@example.com',
            password: 'password1',
            name: 'User 1',
            isAdmin: false,
        },
    });
    const user2 = await prisma.user.upsert({
        where: { email: 'user2@example.com' },
        update: {},
        create: {
            email: 'user2@example.com',
            password: 'password2',
            name: 'User 2',
            isAdmin: false,
        },
    });
    const product1 = await prisma.product.upsert({
        where: { title: 'Product 1' },
        update: {},
        create: {
            title: 'Product 1',
            category: 'Category 1',
            description: 'This is a product',
            price: 1000,
        },
    });
    const product2 = await prisma.product.upsert({
        where: { title: 'Product 2' },
        update: {},
        create: {
            title: 'Product 2',
            category: 'Category 2',
            description: 'This is another product',
            price: 1500,
        },
    });
    const wishlist1 = await prisma.wishlist.upsert({
        where: { userId: user1.id },
        update: {},
        create: {
            userId: user1.id,
            products: {
                create: [
                    {
                        productId: product1.id,
                        quantity: 1,
                    },
                    {
                        productId: product2.id,
                        quantity: 2,
                    },
                ],
            },
        },
    });
    const wishlist2 = await prisma.wishlist.upsert({
        where: { userId: user2.id },
        update: {},
        create: {
            userId: user2.id,
            products: {
                create: [
                    {
                        productId: product1.id,
                        quantity: 1,
                    },
                    {
                        productId: product2.id,
                        quantity: 2,
                    },
                ],
            },
        },
    });
    const order1 = await prisma.order.create({
        data: {
            userId: user1.id,
            products: {
                create: [
                    {
                        productId: product1.id,
                        quantity: 1,
                    },
                    {
                        productId: product2.id,
                        quantity: 1,
                    },
                ],
            },
            total: 2500,
            status: 'Completed',
        },
    });
    const cart1 = await prisma.cart.upsert({
        where: { userId: user1.id },
        update: {},
        create: {
            userId: user1.id,
            products: {
                create: [
                    {
                        productId: product1.id,
                        quantity: 2,
                    },
                ],
            },
            total: 2000,
        },
    });
    const cart2 = await prisma.cart.upsert({
        where: { userId: user2.id },
        update: {},
        create: {
            userId: user2.id,
            products: {
                create: [
                    {
                        productId: product1.id,
                        quantity: 2,
                    },
                ],
            },
            total: 2000,
        },
    });
    console.log({
        user1,
        user2,
        product1,
        product2,
        wishlist1,
        wishlist2,
        order1,
        cart1,
        cart2,
    });
}
seed()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map