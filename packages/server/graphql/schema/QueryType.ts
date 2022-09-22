import { GraphQLNonNull, GraphQLObjectType, GraphQLList } from 'graphql'
import { connectionArgs, connectionFromArray } from 'graphql-relay'
import * as PostLoader from '../posts/PostLoader'
import { PostConnection } from '../posts/PostType'
import { UserModel } from '../user/UserModel'
import { UserType } from '../user/UserType'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: () => ({
    posts: {
      type: new GraphQLNonNull(PostConnection),
      args: connectionArgs,
      resolve: async (_, args, context) => {
        const data: any = await PostLoader.getAll()
        return connectionFromArray(data, args)
      },
    },
    allUsers: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        const user = await UserModel.find({})
        return user
      },
    },
  }),
})
export default QueryType
