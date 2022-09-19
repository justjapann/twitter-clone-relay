import { GraphQLObjectType, GraphQLString } from 'graphql'
import { connectionDefinitions } from 'graphql-relay'

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post Type',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (post) => post._id,
    },
    body: {
      type: GraphQLString,
      resolve: (post) => post.body,
    },
  }),
})

const { connectionType: PostConnection, edgeType: PostEdge } = connectionDefinitions({
  nodeType: PostType,
})

export { PostConnection, PostEdge }

export default PostType
