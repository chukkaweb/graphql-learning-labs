
```markdown
# 🧰 GraphQL Development Tools

## 🎯 Objective
Familiarize yourself with tools that make GraphQL development and testing easier.

---

## 1️⃣ Apollo Server
- Backend framework for building GraphQL APIs.
- Handles schema, resolvers, and context setup.

👉 Docs: [https://www.apollographql.com/docs/apollo-server](https://www.apollographql.com/docs/apollo-server)

---

## 2️⃣ Apollo Studio
- Cloud tool to explore, test, and monitor your GraphQL schema.
- Supports metrics, schema history, and GraphOS integration.

👉 [https://studio.apollographql.com](https://studio.apollographql.com)

---

## 3️⃣ Apollo Router
- Used for **Apollo Federation** — connecting multiple subgraphs.
- Written in Rust for performance.

👉 [Apollo Router Docs](https://www.apollographql.com/docs/router)

---

## 4️⃣ GraphQL Playground
- Browser UI for testing queries and mutations.
- Comes automatically with Apollo Server.
- Alternative: **Altair**, **Insomnia**, or **Postman** (for GraphQL).

---

## 5️⃣ TypeScript
- Strong typing for GraphQL server code.
- Helps catch resolver and schema mismatches early.

Install:
```bash
npm install typescript ts-node @types/node --save-dev
````

---

## 6️⃣ Helpful Developer Tools

| Tool                | Purpose                                     |
| ------------------- | ------------------------------------------- |
| **nodemon**         | Auto-restarts server on file changes        |
| **uuid**            | Generate unique IDs                         |
| **dotenv**          | Load environment variables                  |
| **graphql-codegen** | Auto-generate TypeScript types from schemas |

Example install:

```bash
npm install nodemon uuid dotenv
```

Online GraphQL Playground Tools
If you don’t want to set up immediately, you can practice queries in ready-made playgrounds:
[Apollo Studio Explorer](https://studio.apollographql.com/sandbox/explorer )
[GraphQLBin](https://graphqlbin.com/ )
[Countries API Playground](https://countries.trevorblades.com/ ) (free API for practice)

---

## 🧠 Real-world Tip:

In big teams, these tools integrate with CI/CD to:

* Validate schema consistency
* Run tests against mock subgraphs
* Push updates to Apollo GraphOS for versioning

````

---