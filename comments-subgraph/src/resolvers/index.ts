import { Query } from "./Query";
import { Comments } from "./Comments";

const resolvers = {
  ...Query,
  ...Comments,
};

export default resolvers;
