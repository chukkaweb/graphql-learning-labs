import { Resolvers } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Article: Resolvers = {
  Article: {
    __resolveReference(parent, context: DataSourceContext) {
      return context.articleApi.getArticleById(parent.id, context.authToken);
    },
    author: (parent, _args, context: DataSourceContext) => {
      return { __typename: "Author", id: parent.authorId, listArticles: [] };
    },
    summary: (parent) => {
      if (!parent.content) return null;
      return parent.content.split(" ").slice(0, 3).join(" ") + "...";
    },
  },
  Author: {
    listArticles: async (parent, _args, context: DataSourceContext) => {
      const articles = await context.articleApi.listArticles(context.authToken);
      return articles.filter((article) => article.authorId === parent.id);
    },
    latestArticle: async (parent, _args, context: DataSourceContext) => {
      const articles = await context.articleApi.listArticles(context.authToken);
      return articles.filter((article) => article.authorId === parent.id)[0];
    },
  },
};
