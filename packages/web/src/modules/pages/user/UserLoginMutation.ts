import { graphql } from "react-relay";

export const UserLogin = graphql`
  mutation UserLoginMutation($username: String!, $password: String!) {
    userLoginMutation(input: { username: $username, password: $password }) {
      token
      user {
        username
        email
      }
    }
  }
`;