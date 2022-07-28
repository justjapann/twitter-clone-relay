import { graphql } from "react-relay";

export const UserRegister = graphql`
  mutation UserRegisterMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
    userRegisterMutation(
      input: { username: $username, email: $email, password: $password }
    ) {
      token
      user {
        username
        email
        password
      }
    }
  }
`;
