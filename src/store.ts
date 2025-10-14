import { v4 as uuidv4 } from 'uuid'

export interface IAuthor {
    id: string
    name: string
}

export const data: IAuthor[] = []

export const authorStore = {
    getAll: () => data,

    get: (id: string) => data.find((a) => a.id === id),

    add: (name: string) => {
        const newAuthor: IAuthor = { id: uuidv4(), name }
        data.push(newAuthor)
        return newAuthor
    },

    update: (id: string, name: string) => {
        const author = data.find((a) => a.id === id)
        if (author) {
            author.name = name
        }
        return author
    },

    delete: (id: string) => {
        const index = data.findIndex((a) => a.id === id)
        if (index !== -1) {
            return data.splice(index, 1)[0]
        }
        return null
    },
}
