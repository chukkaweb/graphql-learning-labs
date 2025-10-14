import gql from 'graphql-tag'

const Schema = gql`
    "Article Type Resolver"
    type Article {
        id: ID!
        title: String!
        content: String
        authorId: String!
        author: Author
    }

    type Query {
        article(id: String!): Article
        articles: [Article]
    }

    type Mutation {
        createArticle(title: String!, content: String, authorId: String!): Article
        updateArticle(id: String!, title: String!, content: String, authorId: String): Article
        deleteArticle(id: String!): Article
    }
`
export default Schema
