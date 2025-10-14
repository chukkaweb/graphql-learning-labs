import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import { Express } from 'express'

import { schema } from '@/graphs/schema'

export default async function GQLServer(app: Express) {
    const articleServer = new ApolloServer({ schema })

    await articleServer.start()
    app.use('/graphql', expressMiddleware(articleServer))
}
