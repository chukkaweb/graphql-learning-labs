import { Comments } from "../__generated__/resolvers-types";
import { RestClient } from "../utils";

export type ICommentsAPI = {
  getCommentsByAuthor: (
    authorId: string,
    authToken: string
  ) => Promise<Comments[]>;
  getCommentsOnArticle: (
    articleId: string,
    authToken: string
  ) => Promise<Comments[]>;
};

export const commentsApi: ICommentsAPI = {
  getCommentsByAuthor: async (authorId: string, authToken: string) => {
    const result = await RestClient<Comments[]>({
      endpoint: `/comments/author/${authorId}`,
      headers: { Authorization: authToken },
    });

    return result;
  },
  getCommentsOnArticle: async (articleId: string, authToken: string) => {
    const res = await RestClient<Comments[]>({
      endpoint: `/comments/article/${articleId}`,
      headers: { Authorization: authToken },
    });
    return res;
  },
};
