# 🧩 GraphQL Schema & Resolvers

## 🎯 Objective
Understand how to define your GraphQL schema (the *menu*) and connect it with resolvers (the *chefs* that serve data).

---

## 1️⃣ What is a Schema?

- The schema defines **what data** your API can return and **how clients can query** it.
- Written using **GraphQL SDL (Schema Definition Language)**.

Example:
```graphql
type Author {
  id: ID!
  name: String!
  age: Int
}

type Query {
  authors: [Author]
  author(id: ID!): Author
}
Here:

type Author defines a data model.

Query is the entry point for reading data.

2️⃣ What are Resolvers?
Resolvers are functions that tell GraphQL how to fetch data for each field.

They connect your schema to your data sources (DB, REST API, in-memory store, etc.)

Example:

ts
Copy code
const authors = [
  { id: '1', name: 'Ganesh', age: 30 },
  { id: '2', name: 'Bhaskar', age: 28 }
];

const resolvers = {
  Query: {
    authors: () => authors,
    author: (_: unknown, args: { id: string }) =>
      authors.find((a) => a.id === args.id)
  }
};
3️⃣ Schema + Resolvers Combined
ts
Copy code
const server = new ApolloServer({ typeDefs, resolvers });
4️⃣ Real-World Analogy
GraphQL Concept	Analogy
Schema	Restaurant Menu
Resolver	Chef cooking the meal
Query	Customer’s order
Mutation	Customer updates the order
Subscription	Waiter telling you when your dish is ready

5️⃣ Types of Operations
Operation	Purpose	Example
Query	Fetch data	getUser(id: ID!)
Mutation	Modify data	addUser(name: String)
Subscription	Real-time updates	onUserAdded

🧠 Key Takeaway
Schema = “What’s possible”

Resolver = “How it happens”