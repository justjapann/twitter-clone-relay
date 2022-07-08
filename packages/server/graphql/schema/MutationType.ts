import { GraphQLObjectType } from "graphql";
import PostMutations from "../posts/mutations";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...PostMutations,
  }),
});

export default MutationType;
