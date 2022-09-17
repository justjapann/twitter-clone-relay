import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import posts from '../PostModel'
import { PostEdge } from '../PostType'

export default mutationWithClientMutationId({
  name: 'CreatePost',
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ title, body }) => {
    const postAlredyExists = await posts.findOne({ title: title })
    if (postAlredyExists) {
      return {
        post: null,
        error: 'Post already exists',
      }
    }
    const post = new posts({
      title: title,
      body: body,
    })
    post.save((err) => {
      if (err) {
        return { error: err.message }
      }
    })
    return { post: post }
  },
  outputFields: {
    postEdge: {
      type: PostEdge,
      resolve: ({ post }) => {
        if (!post) {
          return null
        }
        return {
          cursor: toGlobalId('Post', post.id),
          node: post,
        }
      },
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }: { error: string }) => error,
    },
  },
})
