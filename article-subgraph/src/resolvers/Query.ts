import { Resolvers, Article } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Query: Resolvers = {
  Query: {
    async getArticle(
      _parent,
      { id },
      context: DataSourceContext
    ): Promise<Article | null> {
      return context.articleApi.getArticleById(id, context.authToken);
    },
    async listArticles(
      _: unknown,
      __: unknown,
      context: DataSourceContext
    ): Promise<Article[]> {
      return context.articleApi.listArticles(context.authToken);
    },
  },
};
