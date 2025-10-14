# GraphQL REST API Server

A simple GraphQL server with Express that provides Author management functionality.  
Make sure you have nodeJS installed.

## Setup

1. Install dependencies:

```sh
npm install
```

2. Copy environment file:

```sh
cp example.env .env
```

3. Start development server:

```sh
npm dev
```

## Access Points

- **GraphQL Playground**: Open [http://localhost:3000/graphql](http://localhost:3000/graphql)
- **REST API**: Base URL [http://localhost:3000](http://localhost:3000)

## Available GraphQL Operations

### Queries

- `hello`: Returns a greeting message
- `author(id: String!)`: Get author by ID
- `authors`: Get all authors

### Mutations

- `createAuthor(name: String!)`: Create a new author
- `updateAuthor(id: String!, name: String!)`: Update an author
- `deleteAuthor(id: String!)`: Delete an author

## Example Query

```graphql
query {
    authors {
        id
        name
    }
}
```
