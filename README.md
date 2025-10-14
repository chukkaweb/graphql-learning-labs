# graphql-learning-labs

A hands-on repository for learning GraphQL, Apollo, and Federation. Includes notes, code samples, and real-world scenarios. Each topic is organized in a feature branch with practical examples.

## 📁 Folder Structure

```
graphql-learning-labs/
├── README.md
├── setup/
│   ├── 01-installation.md
│   ├── 02-tools.md
│   └── 03-quickstart.md
├── reference-links.md
├── notes/
│   ├── schema-resolvers.md
│   ├── pagination.md
│   ├── caching.md
│   ├── security.md
│   └── federation-directives.md
└── src/
    ├── users-subgraph/
    ├── products-subgraph/
    ├── supergraph/
    ├── router/
    └── examples/
```

| Folder / File         | Purpose                              |
|---------------------- |--------------------------------------|
| `setup/`              | Installation and setup guides        |
| `notes/`              | Topic-wise learning notes            |
| `src/`                | Code examples (subgraphs, resolvers) |
| `reference-links.md`  | Useful resources                     |

---

## 🚀 Getting Started

**1. Clone the repository**
```bash
git clone https://github.com/<your-username>/graphql-learning-labs.git
cd graphql-learning-labs
```

**2. Install dependencies**
```bash
npm install
```

**3. Run an example**
```bash
npx ts-node src/users-subgraph/index.ts
```
Access GraphQL Playground: [http://localhost:4001](http://localhost:4001)

---

## 🌱 Branch Workflow

| Branch                   | Topic            | Description                       |
|--------------------------|------------------|-----------------------------------|
| feature/01-graphql-basics| Schema, Resolvers| GraphQL fundamentals              |
| feature/02-apollo-server | Apollo setup     | API and type definitions          |
| feature/03-federation    | Federation       | Subgraphs & Supergraph            |
| feature/04-pagination    | Pagination       | Offset & Cursor-based pagination  |
| feature/05-caching       | Caching          | Client, CDN, @cacheControl        |
| feature/06-security      | Security         | Auth, introspection, defense      |

---

## 🔗 Useful Links

| Topic                 | Resource                                                                                             |
|-----------------------|------------------------------------------------------------------------------------------------------|
| GraphQL Docs          | [graphql.org/learn](https://graphql.org/learn)                                                       |
| Apollo Server         | [apollographql.com/docs/apollo-server](https://www.apollographql.com/docs/apollo-server)             |
| Apollo Federation     | [apollographql.com/docs/federation](https://www.apollographql.com/docs/federation)                   |
| Apollo Router         | [apollographql.com/docs/router](https://www.apollographql.com/docs/router)                           |
| Apollo GraphOS        | [apollographql.com/docs/graphos](https://www.apollographql.com/docs/graphos)                         |

---

## 🧪 Learning Labs Roadmap

- GraphQL Basics (Schema, Resolvers, Queries, Mutations)
- Apollo Server Setup
- Subgraph + Router + Federation
- Pagination (Offset + Cursor)
- Caching (Client, CDN, Server)
- Security & Auth
- Subgraph Linking (`@key`, `@provides`, `@override`)
- GraphOS Integration
