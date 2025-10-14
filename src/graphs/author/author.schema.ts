import gql from 'graphql-tag'

const Schema = gql`
    type Author {
        id: ID!
        name: String
    }

    type Query {
        hello: String
        author(id: String!): Author
        authors: [Author]
    }

    type Mutation {
        createAuthor(name: String!): Author
        updateAuthor(id: String!, name: String!): Author
        deleteAuthor(id: String!): Author
    }
`
export default Schema
