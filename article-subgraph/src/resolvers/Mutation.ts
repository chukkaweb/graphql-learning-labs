import { DataSourceContext } from "../types/DataSourceContext";
import { Resolvers, Article } from "../__generated__/resolvers-types";
export const Mutation: Resolvers = {
  Mutation: {
    async createArticle(_parent, args, context: DataSourceContext) {
      return context.articleApi.createArticle(args, context.authToken);
    },
    async updateAuthor(
      _parent: unknown,
      args: Partial<Article>,
      context: DataSourceContext
    ) {
      return context.articleApi.updateArticle(
        args as Article,
        context.authToken
      );
    },
    async deleteAuthor(
      _: unknown,
      args: Partial<Article>,
      context: DataSourceContext
    ) {
      return context.articleApi.deleteArticle(
        { id: args.id as string },
        context.authToken
      );
    },
  },
};
