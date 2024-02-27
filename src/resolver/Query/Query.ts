import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const Query = {
  categories: async () => {
    return await prisma.category.findMany();
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
};
