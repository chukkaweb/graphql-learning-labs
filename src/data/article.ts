import { v4 as uuidv4 } from 'uuid'

import { IAuthor, authorStore } from './author'

export interface IArticle {
    id: string
    title: string
    content?: string
    authorId: string
}
export interface IArticleWithAuthor extends IArticle {
    author?: IAuthor
}

export const data: IArticle[] = []

export const articleStore = {
    getAll: () => data,

    getAllWithAuthor: (): IArticleWithAuthor[] => {
        return data.map((article) => {
            const author = authorStore.get(article.authorId)
            return { ...article, author }
        })
    },

    get: (id: string) => data.find((a) => a.id === id),

    getWithAuthor: (id: string): IArticleWithAuthor | undefined => {
        const article = data.find((a) => a.id === id)
        if (!article) return undefined
        const author = authorStore.get(article.authorId)
        return { ...article, author }
    },

    add: (payload: Omit<IArticle, 'id'>) => {
        const newArticle: IArticle = { id: uuidv4(), ...payload }
        data.push(newArticle)
        return newArticle
    },

    update: (id: string, payload: Partial<Omit<IArticle, 'id'>>) => {
        let article = data.find((a) => a.id === id)
        if (!article) return null
        const updArticle = { ...article, ...payload }
        article.title = updArticle.title
        article.content = updArticle.content
        article.authorId = updArticle.authorId
        return article
    },

    delete: (id: string) => {
        const index = data.findIndex((a) => a.id === id)
        if (index !== -1) {
            return data.splice(index, 1)[0]
        }
        return null
    },
}
