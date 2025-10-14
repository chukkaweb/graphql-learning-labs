import gql from 'graphql-tag'

const Schema = gql`
    interface SearchResult {
        id: ID!
    }

    type Article implements SearchResult
    type Author implements SearchResult

    type Query {
        search(term: String!): [SearchResult!]!
    }
`

export default Schema
