import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
type UserInfo = {
  email: string;
  firstName: string;
  password: string;
  lastName: string;
};
type Category = {
  name: string;
};
export const resolvers = {
  Query: {
    categories: async () => {
      return await prisma.category.findMany();
    },
    products: async () => {
      const productsWithCategories = await prisma.product.findMany({
        include: {
          categories: true,
        },
      });

      return productsWithCategories;
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any, context: any) => {
      console.log(args);
      const { title, price, rent, description, categoryIds, createdBy } = args;

      // Create the product
      const createdProduct = await prisma.product.create({
        data: {
          title,
          price,
          rent,
          description,
          createdBy,
          categories: {
            connect: categoryIds.map((categoryId: number) => ({
              id: categoryId,
            })),
          },
        },
        include: {
          categories: true,
        },
      });

      return createdProduct;
    },

    signUp: async (_: any, args: UserInfo, context: any) => {
      return await prisma.user.create({ data: args });
    },
    createCategory: async (_: any, args: Category, context: any) => {
      return await prisma.category.create({ data: args });
    },
    signin: async (
      _: any,
      args: { email: string; password: string },
      context: any
    ) => {
      const user = await prisma.user.findFirst({
        where: { email: args.email },
      });
      if (!user) return null;
      if (user?.password === args.password) {
        return user;
      } else {
        return null;
      }
    },
  },
};
