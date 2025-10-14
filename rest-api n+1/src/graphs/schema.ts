import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

import Article from './article'
import Author from './author'

const typeDefs = mergeTypeDefs([Article.typeDefs, Author.typeDefs])
const resolvers = mergeResolvers([Article.resolvers, Author.resolvers])

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})
