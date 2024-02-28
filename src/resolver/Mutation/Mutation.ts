type UserInfo = {
  email: string;
  firstName: string;
  password: string;
  lastName: string;
};
type Category = {
  name: string;
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Mutation = {
  createProduct: async (_: any, args: any, context: any) => {
    const { title, price, rent, description, categoryIds, rentId, createdBy } =
      args;

    // Create the product
    const createdProduct = await prisma.product.create({
      data: {
        title,
        price,
        rent,
        description,
        user: {
          connect: { id: createdBy }, // Connect createdBy with an existing user
        },
        categories: {
          connect: categoryIds.map((categoryId: number) => ({
            id: categoryId,
          })),
        },
        rentType: {
          connect: { id: rentId },
        },
      },
      include: {
        categories: true,
        rentType: true,
        user: true,
      },
    });

    return createdProduct;
  },
  updateProduct: async (_: any, args: any, context: any) => {
    const {
      productId,
      title,
      description,
      price,
      rent,
      rentTypeId,
      categoryIds,
    } = args;

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        title: title,
        description: description,
        price: price,
        rent: rent,
        rentType: {
          connect: { id: rentTypeId },
        },
        categories: {
          set: categoryIds.map((categoryId: number) => ({ id: categoryId })),
        },
      },
      include: {
        rentType: true,
        categories: true,
      },
    });

    return updatedProduct;
  },
  deleteProduct: async (_: any, args: any, context: any) => {
    // Check if the product with the given ID exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: args?.productId },
    });

    if (!existingProduct) {
      throw new Error(`Product with ID ${args?.productId} not found`);
    }
    const deletedProduct = await prisma.product.delete({
      where: { id: args?.productId },
      include: {
        rentType: true,
        categories: true,
      },
    });

    return deletedProduct;
  },
  createCategory: async (_: any, args: Category, context: any) => {
    return await prisma.category.create({ data: args });
  },
  addRent: async (_: any, args: any, context: any) => {
    return await prisma.rentType.create({ data: args });
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
  signUp: async (_: any, args: UserInfo, context: any) => {
    return await prisma.user.create({ data: args });
  },
  addTransaction: async (_: any, args: any, context: any) => {
    const { userId, productId, type, fromDate, toDate } = args;
    const createdTransaction = await prisma.transaction.create({
      data: {
        userId,
        productId,
        type,
        fromDate: fromDate ? new Date(fromDate) : null,
        toDate: toDate ? new Date(toDate) : null,
      },
      include: {
        product: true,
        user: true,
      },
    });

    return createdTransaction;
  },
};
