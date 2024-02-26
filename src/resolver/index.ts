import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
type UserInfo = {
  email: string;
  firstName: string;
  password: string;
  lastName: string;
};
export const resolvers = {
  Query: {},
  Mutation: {
    signUp: async (_: any, args: UserInfo, context: any) => {
      return await prisma.user.create({ data: args });
    },
  },
};
