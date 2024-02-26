export const typeDefs = `#graphql
  type Query {
    me: User
    user(id: Int!): User
    products: [Product]
    product(id: Int!): Product
    categories: [Category]
    transactions: [Transaction]
    transaction(id: Int!): Transaction
  }
  type Mutation {
    signUp(email: String!
        firstName: String!
        lastName: String!
        password: String!
        address: String
        phone: Int): User

    createCategory(name: String!): Category
  }

    type User {
        id: Int!
        email: String!
        firstName: String!
        lastName: String!
        password: String!
        address: String
        phone: Int
        createdAt: String!
        products: [Product]
        transactions: [Transaction]
      }
      type Category {
        id: Int!
        name: String!
        createdAt: String!
        products: [Product]
      }
      type Product {
        id: Int!
        title: String!
        price: Float!
        rent: Float!
        description: String!
        createdAt: String!
        categories: [Category!]!
        createdBy: Int
        transactions: [Transaction]
        user: [User]
      }
        type Transaction {
            id: Int!
            user: User!
            product: Product!
            status: String!
            createdAt: String!
        }

    
`;
