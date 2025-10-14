# REST Subscription Example

## Pre-requisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## Setup

```sh
./prepare.sh
pnpm dev
```

## Manual Setup

0. Install node (>=22) and pnpm (>=10)
1. `pnpm i`
2. cd inside each folder and run `pnpm i`
3. in `rest-api` copy the example.env to .env
4. in router, copy example.env to .env & update Apollo Key
5. `pnpm dev`

## Usage

Visit [http://localhost:4000](http://localhost:4000) to access the Apollo Server.

---

## Architecture

```mermaid
flowchart TD
    Client[Client Browser]
    Router[Router _Apollo Router_]
    RestAPI[REST API Server]
    AuthorSG[Author Subgraph]
    ArticleSG[Article Subgraph]

    Client -->|HTTP| Router
    Router -->|GraphQL| AuthorSG
    Router -->|GraphQL| ArticleSG
    AuthorSG -->|Resolver| RestAPI
    Router -->|Connector| RestAPI
    ArticleSG -->|Resolver| RestAPI
```

- **REST API Server**: Provides REST endpoints for data access.
- **Author Subgraph**: GraphQL subgraph exposing author-related data.
- **Article Subgraph**: GraphQL subgraph exposing article-related data.
- **Router**: Apollo Router federates subgraphs and proxies REST calls, exposing a unified GraphQL API.
