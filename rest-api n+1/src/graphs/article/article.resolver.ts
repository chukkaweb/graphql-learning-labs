import { IArticle, IArticleWithAuthor, IAuthor } from '@/types'
import { RestClient } from '@/utils'

const resolvers = {
    Query: {
        article: async (_: unknown, data: { id: string }) => {
            const result: IArticle | null = await RestClient<IArticle>(`/article/${data.id}`)
            if (!result) return null
            const author = await RestClient(`/author/${result.authorId}`)
            return { ...result, author }
        },
        articles: async () => {
            const result = await RestClient<IArticle[]>(`/article`)
            if (!result) return []
            const articles: IArticleWithAuthor[] = result.map((article) => ({ ...article, author: undefined }))
            for (let i = 0; i < articles.length; i++) {
                const author = await RestClient<IAuthor>(`/author/${articles[i].authorId}`)
                articles[i] = { ...articles[i], ...author }
            }
            return articles
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
