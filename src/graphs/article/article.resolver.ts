import { articleStore } from '@/data/article'

const resolvers = {
    Query: {
        article: (_: unknown, data: { id: string }) => {
            return articleStore.getWithAuthor(data.id)
        },
        articles: () => articleStore.getAllWithAuthor(),
    },
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
}

export default resolvers
