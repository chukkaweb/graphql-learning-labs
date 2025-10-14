import { IAuthor } from '@/types'
import { v4 as uuidv4 } from 'uuid'

export const data: IAuthor[] = [
    {
        id: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        name: 'Shaktimaan',
    },
    {
        id: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        name: 'Dr Doom',
    },
]

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
