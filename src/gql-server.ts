import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import { Express } from 'express'

import AuthorSchema from './graphs/author/author.schema'
import AuthorResolvers from './graphs/author/author.resolver'

export default async function GQLServer(app: Express) {
    const articleServer = new ApolloServer({
        typeDefs: AuthorSchema,
        resolvers: AuthorResolvers,
    })

    await articleServer.start()
    app.use('/graphql', expressMiddleware(articleServer))
}
