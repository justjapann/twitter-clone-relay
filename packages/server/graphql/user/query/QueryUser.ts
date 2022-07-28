import { GraphQLFieldConfig, GraphQLList } from "graphql";
import { UserModel } from "../UserModel";
import { UserType } from "../UserType";

export const FindUsers: GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLList(UserType),
  async resolve(parent, args) {
    const user = await UserModel.find({});
    return user;
  },
};
