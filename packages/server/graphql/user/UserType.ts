import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { User } from "./UserModel";

export const UserType = new GraphQLObjectType<User>({
  name: "User",
  fields: () => ({
    username: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.username,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.email,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.password,
    },
  }),
});
