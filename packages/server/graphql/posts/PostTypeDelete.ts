import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from "graphql";
import {
  connectionDefinitions,
  globalIdField,
  connectionArgs,
  connectionFromArray,
} from "graphql-relay";
import * as PostLoader from "./PostLoader";

const QueryType = new GraphQLObjectType({
  name: "PostDelete",
  description: "Delete Post Type",
  fields: () => ({
    posts: {
      type: new GraphQLNonNull(PostConnection),
      args: connectionArgs,
      //first, after, before, last
      resolve: async (_, args, context) => {
        const data = await PostLoader.loadAll();
        return connectionFromArray(data, args);
      },
    },
    notConnectionPosts: {
      type: new GraphQLList(QueryType),
      resolve: async () => {
        const data = await PostLoader.loadAll();
        return data;
      },
    },
  }),
});

const { connectionType: PostConnection, edgeType: PostEdge } =
  connectionDefinitions({
    nodeType: QueryType,
  });

export { PostConnection, PostEdge };

export default QueryType;
