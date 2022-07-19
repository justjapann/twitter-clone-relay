import { graphql } from "react-relay";

const CreatePost = graphql`
  mutation createPostMutation {
    CreatePost(input: { title: "testea", body: "testea" }) {
      postEdge {
        node {
          id
          title
          body
        }
      }
    }
  }
`;
