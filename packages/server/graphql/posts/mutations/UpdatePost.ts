import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import posts from '../PostModel'
import { PostEdge } from '../PostType'

export default mutationWithClientMutationId({
  name: 'UpdatePost',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ id, title, body }) => {
    const post = await posts
      .findOneAndUpdate({ _id: id }, { title, body })
      .then((post) => {
        console.log(post.id)
        return {
          post: {
            id: post.id,
            title: post.title,
            body: post.body,
          },
        }
      })
      .catch((e) => {
        return { error: 'post not found' }
      })
    return post
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
