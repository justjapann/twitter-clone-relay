import { GraphQLNonNull, GraphQLObjectType, GraphQLList } from "graphql";
import { connectionArgs, connectionFromArray } from "graphql-relay";
import { PostConnection } from "../posts/PostType";
import * as PostLoader from "../posts/PostLoader";
import { UserModel } from "../user/UserModel";
import { UserType } from "../user/UserType";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all queries",
  fields: () => ({
    posts: {
      type: new GraphQLNonNull(PostConnection),
      args: connectionArgs,
      //first, after, before, last
      resolve: async (_, args, context) => {
        const data = await PostLoader.loadAll();
        return connectionFromArray(data, args);
      },
    },
    allUsers: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        const user = await UserModel.find({});
        return user;
      },
    },
  }),
});

export default QueryType;
