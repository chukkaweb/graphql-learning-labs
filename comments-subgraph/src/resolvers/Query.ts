import { Resolvers, Comments } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Query: Resolvers = {
  Query: {
    async getCommentsOnArticle(
      _parent,
      { articleId }: { articleId: string },
      context: DataSourceContext
    ): Promise<Comments[]> {
      return context.commentsApi.getCommentsOnArticle(
        articleId,
        context.authToken
      );
    },
    async getCommentsByAuthor(
      _: unknown,
      { authorId }: { authorId: string },
      context: DataSourceContext
    ): Promise<Comments[]> {
      return context.commentsApi.getCommentsByAuthor(
        authorId,
        context.authToken
      );
    },
  },
};
