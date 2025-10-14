import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { Article } from "./Article";

const resolvers = {
  ...Query,
  ...Mutation,
  ...Article,
};

export default resolvers;
