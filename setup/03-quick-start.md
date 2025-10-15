
```markdown
# 🚀 GraphQL Quickstart

## 🎯 Goal
Get your first GraphQL server running in under 5 minutes.

---

## Step 1 — Initialize Project

```bash
mkdir graphql-quickstart
cd graphql-quickstart
npm init -y
````

---

## Step 2 — Install Required Packages

```bash
npm install apollo-server graphql
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

---

## Step 3 — Create a Simple Server

`src/server.ts`

```ts
import { ApolloServer, gql } from 'apollo-server';

// Define schema
const typeDefs = gql`
  type Query {
    greet(name: String!): String
  }
`;

// Define resolver
const resolvers = {
  Query: {
    greet: (_: unknown, { name }: { name: string }) => `Hello, ${name}! 👋`
  }
};

// Start server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

---

## Step 4 — Run the Server

```bash
npx ts-node src/server.ts
```

Go to → [http://localhost:4000](http://localhost:4000)

---

## Step 5 — Test in Playground

Query:

```graphql
query {
  greet(name: "Ganesh")
}
```

Response:

```json
{
  "data": { "greet": "Hello, Ganesh! 👋" }
}
```

---

## 🧠 Real-world Use

Used to quickly spin up mock APIs for frontend testing or PoC demos.

```

