# 🧩 GraphQL Installation Guide

## 🎯 Objective
Set up your local environment to run and test GraphQL servers using **Node.js**, **TypeScript**, and **Apollo Server**.

---

## 1️⃣ Prerequisites

Make sure the following are installed on your system:

| Tool | Purpose | Download Link |
|-------|----------|---------------|
| Node.js (v18+) | Runs JavaScript backend | [https://nodejs.org](https://nodejs.org) |
| npm | Package manager (comes with Node) | — |
| Git | Version control | [https://git-scm.com](https://git-scm.com) |
| VS Code | Editor | [https://code.visualstudio.com](https://code.visualstudio.com) |

Check versions:
```bash
node -v
npm -v
git --version


Create a New Project
mkdir graphql-learning
cd graphql-learning
npm init -y

3️⃣ Install Dependencies
npm install graphql apollo-server


For TypeScript:

npm install typescript ts-node @types/node --save-dev
npx tsc --init


## 2️⃣ Create a New Project

```bash
mkdir graphql-learning
cd graphql-learning
npm init -y
```

---

## 3️⃣ Install Dependencies

```bash
npm install graphql apollo-server
```

For TypeScript:

```bash
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

---

## 4️⃣ Folder Setup

```bash
mkdir src
cd src
touch index.ts
```

---

## 5️⃣ Create a Basic GraphQL Server

`src/index.ts`

```ts
import { ApolloServer, gql } from 'apollo-server';

// Schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello GraphQL World 🚀'
  }
};

// Create server
const server = new ApolloServer({ typeDefs, resolvers });

// Run server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
```

---

## 6️⃣ Run the Server

```bash
npx ts-node src/index.ts
```

Access Playground →
👉 [http://localhost:4000](http://localhost:4000)

---

## ✅ Output Example

Query:

```graphql
query {
  hello
}
```

Response:

```json
{
  "data": { "hello": "Hello GraphQL World 🚀" }
}
```

---

## 🧠 Tip

If you get `Cannot find module` or `dist` errors, ensure TypeScript is set to compile to `esnext` and run using:

```bash
npx ts-node src/index.ts
```

````

---