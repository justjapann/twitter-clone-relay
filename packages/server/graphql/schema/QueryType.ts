import { GraphQLNonNull, GraphQLObjectType, GraphQLList } from 'graphql'
import { connectionFromArray } from 'graphql-relay'
import * as PostLoader from '../posts/PostLoader'
import { PostConnection } from '../posts/PostType'
import { UserModel } from '../user/UserModel'
import { UserType } from '../user/UserType'
import * as userMutations from '../user/mutations'
import * as userQueries from '../user/queries'
import { nodeField, nodesField } from './typeRegister'
import UserLoader from '../user/UserLoader'
import { connectionArgs } from '@entria/graphql-mongo-helpers'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    posts: {
      type: new GraphQLNonNull(PostConnection),
      args: connectionArgs,
      resolve: async (_, args, context) => {
        const data: any = await PostLoader.getAll()
        return connectionFromArray(data, args)
      },
    },
    queryUser: {
      type: UserType,
      resolve: (root, args, context) => UserLoader.load(context, context.user?._id),
    },
    ...userMutations,
    ...userQueries,
  }),
})
export default QueryType
