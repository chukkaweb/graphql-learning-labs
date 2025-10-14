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
