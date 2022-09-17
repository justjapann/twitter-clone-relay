import { GraphQLNonNull, GraphQLObjectType, GraphQLList } from 'graphql'
import { connectionArgs, connectionFromArray } from 'graphql-relay'
import * as PostLoader from '../posts/PostLoader'
import { PostConnection } from '../posts/PostType'

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
  }),
})

export default QueryType
