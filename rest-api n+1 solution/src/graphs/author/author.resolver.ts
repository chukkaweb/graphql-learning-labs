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
    /*
    Mutation: {
        createAuthor: (_: unknown, data: { name: string }) => {
            const author = authorStore.add(data.name)
            return author
        },
        updateAuthor: (_: unknown, data: { id: string; name: string }) => {
            const author = authorStore.update(data.id, data.name)
            return author
        },
        deleteAuthor: (_: unknown, data: { id: string }) => {
            const author = authorStore.delete(data.id)
            return author
        },
    },
    */
}

export default resolvers
