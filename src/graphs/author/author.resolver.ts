import { authorStore } from '../../store'

const resolvers = {
    Query: {
        hello: () => `Hi, this is gQL server`,
        author: (_: unknown, data: { id: string }) => {
            return authorStore.get(data.id)
        },
        authors: () => authorStore.getAll(),
    },
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
}

export default resolvers
