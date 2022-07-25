import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";
import { uuid } from "uuidv4";
import { PostEdge } from "../PostTypeDelete";

export default mutationWithClientMutationId({
  name: "DeletePost",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async () => {
    const post = {
      id: uuid(),
    };

    return {
      post,
      error: null,
      success: "Post deleted succesfully",
    };
  },
  outputFields: {
    postEdge: {
      type: PostEdge,
      resolve: async ({ post }) => {
        if (!post) {
          return null;
        }

        return {
          cursor: toGlobalId("Post", post.id),
          node: post,
        };
      },
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }: { error: string }) => error,
    },
    success: {
      type: GraphQLString,
      resolve: ({ success }: { success: string }) => success,
    },
  },
});
