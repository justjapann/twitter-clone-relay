import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import posts from '../PostModel'

export default mutationWithClientMutationId({
  name: 'DeletePost',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ id }) => {
    const deletedPost = await posts.findByIdAndDelete({ _id: id })
    if (deletedPost) {
      return { success: true }
    }
    return { error: 'Movie does not exist' }
  },
  outputFields: {
    error: {
      type: GraphQLString,
      resolve: ({ error }: { error: string }) => error,
    },
    success: {
      type: GraphQLString,
      resolve: ({ success }: { success: string }) => success,
    },
  },
})
