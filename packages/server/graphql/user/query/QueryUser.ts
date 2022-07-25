import { GraphQLList, GraphQLObjectType } from "graphql";
import { UserModel } from "../UserModel";
import { UserType } from "../UserType";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Find all users",
  fields: {
    allUsers: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        const user = await UserModel.find({});
        return user;
      },
    },
  },
});
