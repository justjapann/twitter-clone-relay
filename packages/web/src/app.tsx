import React from "react";
import { graphql, usePaginationFragment, useFragment } from "react-relay";
import RelayEnvironment from "../relay/RelayEnvironment";
import type { Query } from "../../server/graphql/schema/schema.graphql";

type Props = {
  user: Query;
};

function PostList(props: Props) {
  const data = useFragment(
    graphql`
      fragment PostList_query on User {
        posts {
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
    props.user
  );

  return (
    <>
      <h1>{data.posts.edges.node.title}</h1>
    </>
  );
}

export default PostList;
