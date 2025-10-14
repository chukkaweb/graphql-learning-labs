import { RestClient } from "../utils";
import { Resolvers, Author } from "../__generated__/resolvers-types";
import { DataSourceContext } from "../types/DataSourceContext";

export const Query: Resolvers = {
  Query: {
    async getAuthor(
      _parent,
      { id },
      ctx: DataSourceContext
    ): Promise<Author | null> {
      return ctx.authorApi.getAuthorById(id, ctx.authToken);
    },
    async listAuthors(
      _: unknown,
      __: unknown,
      ctx: DataSourceContext
    ): Promise<Author[]> {
      return ctx.authorApi.listAuthors(ctx.authToken);
    },
  },
};
