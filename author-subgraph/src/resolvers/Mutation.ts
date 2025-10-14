import { Resolvers, Author } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Mutation: Resolvers = {
  Mutation: {
    async createAuthor(
      _parent,
      data: { name: string },
      context: DataSourceContext
    ) {
      return context.authorApi.createAuthor(
        {
          name: data.name,
        },
        context.authToken
      );
    },
    async updateAuthor(
      _parent,
      data: { id: string; name: string },
      context: DataSourceContext
    ) {
      return context.authorApi.updateAuthor(
        {
          id: data.id,
          name: data.name,
        },
        context.authToken
      );
    },
    async deleteAuthor(
      _parent,
      data: { id: string },
      context: DataSourceContext
    ) {
      return context.authorApi.deleteAuthor({ id: data.id }, context.authToken);
    },
  },
};
