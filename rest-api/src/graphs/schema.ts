import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

import Article from './article'
import Author from './author'
import Search from './search'

const typeDefs = mergeTypeDefs([Article.typeDefs, Author.typeDefs, Search.typeDefs])
const resolvers = mergeResolvers([Article.resolvers, Author.resolvers, Search.resolvers])

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})
