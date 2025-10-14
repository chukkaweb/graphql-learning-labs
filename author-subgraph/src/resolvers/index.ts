import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { Author } from "./Author";

const resolvers = {
  ...Query,
  ...Mutation,
  ...Author,
};

export default resolvers;
