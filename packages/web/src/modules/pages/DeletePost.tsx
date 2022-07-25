import React, { Suspense, useState } from "react";
import { graphql, useMutation } from "react-relay";
import { Store, ConnectionHandler } from "relay-runtime";
import { usePaginationFragment } from "react-relay/hooks";

const Delete = ({ query }: any) => {
  const { data } = usePaginationFragment(
    graphql`
      fragment DeletePost_fragment on Query {
        posts {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `,
    query
  );

  const { posts2 } = data;

  console.log(posts2);

  const id = "UG9zdDo2MGU5ODk1ZC0wMDUwLTQwMjctOTAyZS00OGUyYzI0Y2RjODE";

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <button onClick={() => console.log("oi")}>delete post</button>
    </Suspense>
  );
};

export default Delete;
