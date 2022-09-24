import { GraphQLFieldConfig, GraphQLString } from 'graphql'
import * as UserLoader from '../UserLoader'
import { UserModel } from '../UserModel'
import { UserType } from '../UserType'

export const queryUser: GraphQLFieldConfig<any, any, any> = {
  type: UserType,
  args: {
    username: { type: GraphQLString },
  },
  resolve: async (_, args, context) => {
    const user = await UserModel.findOne({ username: args.username })
    return await UserLoader.load(context, user?.id)
  },
}
