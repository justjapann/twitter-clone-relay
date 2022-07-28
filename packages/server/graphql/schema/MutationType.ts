import { GraphQLObjectType } from "graphql";
import PostMutations from "../posts/mutations";
import * as userMutations from "../user/mutations";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...PostMutations,
    ...userMutations,
  }),
});

export default MutationType;
