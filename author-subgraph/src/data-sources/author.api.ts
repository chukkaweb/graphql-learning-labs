import { Author } from "../__generated__/resolvers-types";
import { RestClient } from "../utils";

export type IAuthorApi = {
  getAuthorById: (id: string, authToken: string) => Promise<Author | null>;
  listAuthors: (authToken: string) => Promise<Author[]>;
  createAuthor: (data: { name: string }, authToken: string) => Promise<Author>;
  updateAuthor: (data: Author, authToken: string) => Promise<Author | null>;
  deleteAuthor: (data: { id: string }, authToken: string) => Promise<boolean>;
};

export const authorApi: IAuthorApi = {
  getAuthorById: async (id: string, authToken: string) => {
    const result = await RestClient<Author>({
      endpoint: `/author/${id}`,
      headers: { Authorization: authToken },
    });

    return result;
  },
  listAuthors: async (authToken: string) => {
    const res =
      (await RestClient<Author[]>({
        endpoint: `/author`,
        headers: { Authorization: authToken },
      })) || [];
    return res;
  },
  createAuthor: async (data: { name: string }, authToken: string) => {
    const author: Author = await RestClient<Author>({
      endpoint: `/author`,
      method: "POST",
      headers: { Authorization: authToken },
      data: { name: data.name },
    });
    return author;
  },
  updateAuthor: async (data: Author, authToken: string) => {
    const author = await RestClient<Author>({
      endpoint: "/auhor/" + data.id,
      headers: { Authorization: authToken },
      data: { name: data.name },
      method: "PUT",
    });
    return author;
  },
  deleteAuthor: async (data: { id: string }, authToken: string) => {
    const author = await RestClient<Author>({
      endpoint: "/author/" + data.id,
      method: "DELETE",
      headers: { Authorization: authToken },
    });
    return true;
  },
};
