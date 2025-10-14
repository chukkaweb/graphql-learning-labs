import { IAuthor } from '@/types'
import { RestClient } from '@/utils'

const resolvers = {
    Query: {
        hello: () => `Hi, this is gQL server`,
        author: async (_: unknown, data: { id: string }) => {
            const result: IAuthor | null = await RestClient<IAuthor>(`/author/${data.id}`)
            return result
        },
        authors: async () => {
            return (await RestClient<IAuthor[]>(`/author`)) || []
        },
    },

    Mutation: {
        createAuthor: async (_: unknown, data: { name: string }) => {
            const author: IAuthor = await RestClient<IAuthor>(`/author`, { name: data.name }, 'POST')
            return author
        },
        updateAuthor: async (_: unknown, data: { id: string; name: string }) => {
            const author = await RestClient<IAuthor>('/auhor/' + data.id, { name: data.name }, 'PUT')
            return author
        },
        deleteAuthor: async (_: unknown, data: { id: string }) => {
            const author = await RestClient<IAuthor>('/author/' + data.id, {}, 'DELETE')
            return author
        },
    },
}

export default resolvers
