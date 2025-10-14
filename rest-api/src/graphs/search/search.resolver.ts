import { IAuthor, IArticle } from '@/types'
import { RestClient } from '@/utils'

const resolvers = {
    SearchResult: {
        __resolveType(obj: IArticle | IAuthor) {
            // Check if the object has title property (Article)
            if ('title' in obj) {
                return 'Article'
            }
            // Check if the object has name property (Author)
            if ('name' in obj) {
                return 'Author'
            }
            return null
        },
    },
    Query: {
        search: async (_: unknown, data: { term: string }) => {
            const articles = await RestClient<IArticle[]>(`/article/search`, { term: data.term }, 'POST')
            const authors = await RestClient<IAuthor[]>(`/author/search`, { term: data.term }, 'POST')
            return [...(articles || []), ...(authors || [])]
        },
    },
}

export default resolvers
