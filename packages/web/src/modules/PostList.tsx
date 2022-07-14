import React from "react";
import { graphql } from "react-relay";
import { usePaginationFragment } from "react-relay/hooks";

const PostList = ({ query }: any) => {
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

  const postTitle = posts.edges.map((item: any) => item.node.title);

  return (
    <>
      <ul>{postTitle}</ul>
    </>
  );
};

export default PostList;
