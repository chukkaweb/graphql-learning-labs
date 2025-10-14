import { IArticle, GQLContext } from '@/types'
import { RestClient } from '@/utils'

const resolvers = {
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
    Article: {
        author: async (parent: IArticle, _: unknown, ctx: GQLContext) => {
            return ctx.loaders.authorLoader.load(parent.authorId)
        },
    },
    /*
    Mutation: {
        createArticle: (_: unknown, data: { title: string; content?: string; authorId: string }) => {
            const article = articleStore.add(data)
            return article
        },
        updateArticle: (_: unknown, data: { id: string; title?: string; content?: string; authorId?: string }) => {
            const article = articleStore.update(data.id, {
                title: data.title,
                content: data.content,
                authorId: data.authorId,
            })
            return article
        },
        deleteArticle: (_: unknown, data: { id: string }) => {
            const article = articleStore.delete(data.id)
            return article
        },
    },
    */
}

export default resolvers
