import DataLoader from 'dataloader'

export type IAuthorLoader = DataLoader<string, IAuthor | null, string>

export interface GQLContext {
    loaders: {
        authorLoader: ReturnType<() => IAuthorLoader>
    }
}
export interface IAuthor {
    id: string
    name: string
}

export interface IArticle {
    id: string
    title: string
    content?: string
    authorId: string
}
export interface IArticleWithAuthor extends IArticle {
    author?: IAuthor
}
