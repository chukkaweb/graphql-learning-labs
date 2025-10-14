import { Resolvers } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Comments: Resolvers = {
  Comments: {
    // __resolveReference(parent, context: DataSourceContext) {
    //   return context.commentsApi.getArticleById(parent.id, context.authToken);
    // },
    author: (parent) => {
      return {
        __typename: "Author",
        id: parent.authorId,
        name: parent.authorName,
        comments: [],
      };
    },
  },
  Article: {
    comments: async (parent, _args, context: DataSourceContext) => {
      return context.commentsApi.getCommentsOnArticle(
        parent.id,
        context.authToken
      );
    },
  },
  Author: {
    comments: async (parent, _args, context: DataSourceContext) => {
      return context.commentsApi.getCommentsByAuthor(
        parent.id,
        context.authToken
      );
    },
  },
};
