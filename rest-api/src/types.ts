import DataLoader from 'dataloader'

export type IAuthorLoader = DataLoader<string, IAuthor | null, string>

export interface GQLContext {
    loaders: {
        authorLoader: ReturnType<() => IAuthorLoader>
    }
}

export interface ISearch {
    id: string
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

export interface IComment {
    id: string
    articleId: string
    authorId: string
    content: string
    authorName: string
}
