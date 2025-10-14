import { Author as IAuthor, Resolvers } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Author: Resolvers = {
  Author: {
    async __resolveReference(parent, context: DataSourceContext) {
      return context.authorApi.getAuthorById(parent.id, context.authToken);
    },
  },
};
