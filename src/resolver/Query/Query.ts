import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const Query = {
  categories: async () => {
    return await prisma.category.findMany();
  },
  rentypes: async () => {
    return await prisma.rentType.findMany();
  },
  products: async () => {
    const productsWithCategories = await prisma.product.findMany({
      include: {
        categories: true,
        rentType: true,
      },
    });

    return productsWithCategories;
  },
  user: async (_: any, { id }: any) => {
    const user = await prisma.user.findUnique({
      where: { id: id },
      include: { products: true },
    });

    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    return user;
  },
};
