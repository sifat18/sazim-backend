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
  },
  Mutation: {
    signUp: async (_: any, args: UserInfo, context: any) => {
      return await prisma.user.create({ data: args });
    },
    createCategory: async (_: any, args: Category, context: any) => {
      return await prisma.category.create({ data: args });
    },
  },
};
