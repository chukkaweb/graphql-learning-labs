import DataLoader from 'dataloader'
import { IAuthor, IAuthorLoader } from '@/types'
import { RestClient } from '@/utils'

const batchAuthors = async (ids: readonly string[]): Promise<(IAuthor | null)[]> => {
    const authors = (await RestClient<IAuthor[]>(`/author/searchByIds`, { ids }, 'POST')) || []
    const authorMap: Record<string, IAuthor> = {}
    authors.forEach((author) => {
        if (author) {
            authorMap[author.id] = author
        }
    })
    return ids.map((id) => authorMap[id] || null)
}

export const authorLoader: IAuthorLoader = new DataLoader<string, IAuthor | null>(batchAuthors)
