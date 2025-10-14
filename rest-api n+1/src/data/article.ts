import { v4 as uuidv4 } from 'uuid'

import { authorStore } from './author'
import { IArticle, IArticleWithAuthor } from '@/types'

export const data: IArticle[] = [
    {
        id: '4a3823b2-cf7e-410a-ae16-e4494fa2dba1',
        title: 'Tamraj',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content: 'jahjajajajaj',
    },
    {
        id: 'da1443c9-b2d6-4d6c-bbc9-76a9f1f61c17',
        title: 'Jaikaal',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content: 'jahjajajajaj',
    },
    {
        id: '860cbb41-c59b-4d7a-b8f2-5081dbfda59b',
        title: 'Dr Strange',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content: 'jahjajajajaj',
    },
    {
        id: '486695f3-cfc4-454a-985c-f5fe74557003',
        title: 'Galactus',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content: 'jahjajajajaj',
    },
]

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
