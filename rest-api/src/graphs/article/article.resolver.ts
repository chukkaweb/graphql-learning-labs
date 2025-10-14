import { IArticle, GQLContext } from '@/types'
import { RestClient } from '@/utils'

const resolvers = {
    // Query Resolver
    Query: {
        article: async (_: unknown, data: { id: string }) => {
            const result: IArticle | null = await RestClient<IArticle>(`/article/${data.id}`)
            if (!result) return null
            return result
        },
        articles: async () => {
            const result = await RestClient<IArticle[]>(`/article`)
            return result || []
        },
    },
    // Field Resolver
    Article: {
        author: async (parent: IArticle, _: unknown, ctx: GQLContext) => {
            return ctx.loaders.authorLoader.load(parent.authorId)
        },
    },

    // Mutation Resolver
    Mutation: {
        createArticle: async (_: unknown, data: { title: string; content?: string; authorId: string }) => {
            const article = await RestClient<IArticle>(`/article`, data, 'POST')
            return article
        },
        updateArticle: async (
            _: unknown,
            data: { id: string; title?: string; content?: string; authorId?: string }
        ) => {
            const articlePayload = {
                title: data.title,
                content: data.content,
                authorId: data.authorId,
            }
            const article = await RestClient<IArticle>('/article/' + data.id, articlePayload, 'PUT')
            return article
        },
        deleteArticle: async (_: unknown, data: { id: string }) => {
            const article = await RestClient<IArticle>('/article/' + data.id, {}, 'DELETE')
            return article
        },
    },
}

export default resolvers
