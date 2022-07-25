import React from "react";
import { graphql } from "react-relay";
import { usePaginationFragment } from "react-relay/hooks";
import { ConnectionHandler, Store } from "relay-runtime";

const PostList = ({ query }: any, store: any) => {
  const id2 = "UG9zdDo2MGU5ODk1ZC0wMDUwLTQwMjctOTAyZS00OGUyYzI0Y2RjODE";

  const { data } = usePaginationFragment(
    graphql`
      fragment PostList_query on Query
      @argumentDefinitions(
        first: { type: Int, defaultValue: 5 }
        after: { type: String }
      )
      @refetchable(queryName: "AppQuery") {
        posts(first: $first, after: $after) @connection(key: "PostList_posts") {
          edges {
            node {
              id
              title
            }
          }
          pageInfo {
            hasNextPage
            hasNextPage
            startCursor
            endCursor
          }
        }
      }
    `,
    query
  );

  const { posts } = data;

  console.log(posts);

  const optimisticUpdater = (store: any) => {
    const widgets = ConnectionHandler.getConnection(
      store.getRoot(),
      "PostList_posts"
    );
    if (widgets != null) {
      ConnectionHandler.deleteNode(
        widgets,
        posts.edges.map((item: any) => item.node.id)
      );
    }
  };

  const postTitle = posts.edges.map((item: any) => item.node.id);

  return (
    <>
      <ul>{postTitle}</ul>
      <button
        onClick={() =>
          optimisticUpdater(
            "UG9zdDo2MGU5ODk1ZC0wMDUwLTQwMjctOTAyZS00OGUyYzI0Y2RjODE"
          )
        }
      >
        delete post
      </button>
    </>
  );
};

export default PostList;
