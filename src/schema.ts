export const typeDefs = `#graphql
  type Query {
    me: User
    user(id: Int!): User
    products: [Product]
    product(id: Int!): Product
    categories: [Category]
    rentypes: [Rentype]
    transactions: [Transaction]
    transactionByUser(userId: Int!): [Transaction]
  }
  type Mutation {
    signUp(email: String!
        firstName: String!
        lastName: String!
        password: String!
        address: String
        phone: Int): User

    createCategory(name: String!): Category
    addRent(label: String!): Rentype
    signin(email: String!, password: String!): User
    createProduct(
        title: String!
        price: Float!
        rent: Float!
        rentId: Int!
        description: String!
        categoryIds: [Int!]!
        createdBy: Int!
      ): Product
      updateProduct(
        productId: Int!
        title: String
        description: String
        price: Float
        rent: Float
        rentTypeId: Int
        categoryIds: [Int!]
      ): Product
      deleteProduct(productId: Int!): Product
      addTransaction(userId:Int!, productId: Int!,type:String!, fromDate: String, toDate: String): Transaction

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
      type Rentype {
        id: Int!
        label: String!
        createdAt: String!
        products: [Product]
      }
      type Product {
        id: Int!
        title: String!
        price: Float!
        rent: Float!
        rentType: Rentype!
        description: String!
        createdAt: String!
        categories: [Category]!
        transactions: [Transaction]
        user: User
      }
        type Transaction {
            id: Int!
            user: User!
            product: Product!
            fromDate: String!
            toDate: String!
            type: String!
            createdAt: String!
        }

    
`;
