import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { UserModel } from "../UserModel";
import { UserType } from "../UserType";
import { generateJwtToken } from "../userAuth";

export const userRegisterMutation = mutationWithClientMutationId({
  name: "userRegister",
  inputFields: {
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },

  mutateAndGetPayload: async ({ email, ...rest }) => {
    const user = new UserModel({
      ...rest,
      email,
    });

    const token: any = generateJwtToken(user._id);

    await user.save();

    return {
      id: user._id,
      sucess: "Congratulations! The user has registered with success!",
      token,
    };
  },

  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    user: {
      type: UserType,
      resolve: async ({ email }) => UserModel.findOne({ email }),
    },
  },
});
