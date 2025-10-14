import { Article } from "../__generated__/resolvers-types";
import { RestClient } from "../utils";

export type IArticleApi = {
  getArticleById: (id: string, authToken: string) => Promise<Article | null>;
  listArticles: (authToken: string) => Promise<Article[]>;
  createArticle: (
    data: Partial<Article>,
    authToken: string
  ) => Promise<Article>;
  updateArticle: (data: Article, authToken: string) => Promise<Article | null>;
  deleteArticle: (data: { id: string }, authToken: string) => Promise<boolean>;
};

export const articleApi: IArticleApi = {
  getArticleById: async (id: string, authToken: string) => {
    const result: Article | null = await RestClient<Article>({
      endpoint: `/article/${id}`,
      headers: { Authorization: authToken },
    });

    return result;
  },
  listArticles: async (authToken: string) => {
    const res = await RestClient<Article[]>({
      endpoint: `/article`,
      headers: { Authorization: authToken },
    });
    return res;
  },
  createArticle: async (data: Partial<Article>, authToken: string) => {
    const result: Article = await RestClient<Article>({
      endpoint: `/article`,
      data: {
        title: data.title,
        content: data.content,
        authorId: data.authorId,
      },
      method: "POST",
      headers: { Authorization: authToken },
    });
    return result;
  },
  updateArticle: async (data: Partial<Article>, authToken: string) => {
    const Article = await RestClient<Article>({
      endpoint: "/article/" + data.id,
      data,
      method: "PUT",
      headers: { Authorization: authToken },
    });
    return Article;
  },
  deleteArticle: async (data: { id: string }, authToken: string) => {
    const Article = await RestClient<Article>({
      endpoint: "/article/" + data.id,
      data: {},
      method: "DELETE",
      headers: { Authorization: authToken },
    });
    return true;
  },
};
