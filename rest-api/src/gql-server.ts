import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import { Express } from 'express'

import { authorLoader } from './dataloaders/authorLoader'
import { GQLContext } from './types'
import { schema } from '@/graphs/schema'

export default async function GQLServer(app: Express) {
    const articleServer = new ApolloServer<GQLContext>({ schema })

    await articleServer.start()
    app.use(
        '/graphql',
        expressMiddleware(articleServer, {
            context: async () => ({ loaders: { authorLoader: authorLoader } }),
        })
    )
}
