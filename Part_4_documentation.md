# Preliminary Features: Login and User Registration

### Login

- Implementation: Implemented a simple login feature with basic string matching for the purpose of this challenge.
- Security Considerations: This login implementation is not fully secured and should be enhanced for a production environment.
- Future Improvements: More robust authentication mechanisms, such as JWT or OAuth should be considered.

### User Registration

- Implementation: Created a user registration feature for new users to sign up.
- Security Considerations: Stored user credentials, including password, as plain strings for simplicity. In a real-world scenario, password hashing and salting should be applied.
- Future Improvements: Enhance security by implementing password hashing, email verification, and other best practices.

## Product Management

### Add Your Product

- Implementation: Implemented a multi-page form allowing users to add their products. The design matches the wireframe, enabling users to go back and forth, edit, and review their entries.
- Data Modeling: Products can belong to one or more categories, including ELECTRONICS, FURNITURE, HOME APPLIANCES, SPORTING GOODS, OUTDOOR, and TOYS.

### Edit Your Product

- Implementation: Users can edit their products, providing flexibility to update product details.
- Data Modeling: Utilized Prisma's schema to manage product information, allowing efficient updates.

### Delete Your Product

- Implementation: Users can delete their products, ensuring a seamless product management experience.
- Data Modeling: Integrated Prisma to handle data deletion efficiently.

## Rent and Buy/Sell Features

### List All Products

- Implementation: Users can view a list of all products created by all users.
- Data Presentation: Utilized GraphQL queries to fetch and display product information.

### Buy a Product

- Implementation: Users have the ability to buy a product. Accepting a purchase assumes the successful completion of the transaction.
- Data Management: Managed transactions to reflect product purchases.

### Rent a Product

- Implementation: Users can rent a product, indicating a temporary possession without permanent ownership.
- Data Management: Utilized Prisma to handle rental transactions and associated data.

### Display User's Transactions

- Implementation: Implemented a feature to display all products bought/sold/borrowed/lent by the user.
- Data Presentation: Utilized GraphQL queries to fetch and present transaction details.

### User Experience

- Input Validation and User Feedback: Added extensive input validation for forms.
- User Feedback: Provided clear error messages for users on invalid inputs.
- Future Improvements: Enhance feedback with real-time validation and more user-friendly error messages.

### FE Routing

- Navigation: Basic navigation implemented, but lacks a proper navbar and comprehensive routing.
- Next Steps: Plan to incorporate a full navigation system, with relevant links.
- User Experience: Enhanced routing will provide users with a more intuitive and seamless experience.

### UI Data Display

Future Improvements: Optimize queries and explore pagination for large data sets

### Missing Features

- UI Navigation
- Adding spinners will provide users with visual feedback while waiting for data.
- Clarification on Product Transactions: Clear explanations on when a product will be borrowed, sold, or lent and possibility for multiple user role
- FE Caching update
- UI responsiveness

### Corner Cases and Considerations

- Concurrency Control: Implemented measures to handle concurrent updates to ensure data consistency.
  Error Handling: Implemented robust error handling mechanisms for user feedback and debugging.
- Data Validation: Validated user input to prevent data inconsistencies and enhance user experience.
- Pagination: Considered pagination strategies for efficient handling of large datasets in product listings.
- GraphQL Optimizations: Considered optimizations such as batching and caching for improved GraphQL performance.

### Future Improvements

- Performance Optimization: Optimize queries, indexes, and database schema for enhanced application performance.
- User Authentication and Authorization: Implement a more secure authentication mechanism and define role-based access control for authorization.
- Scalability: Assess and enhance the application's scalability for potential future growth.
- Testing: Expand test coverage with unit, integration, and end-to-end tests to ensure application reliability.
