import { ApolloServer } from "apollo-server";
import { schema } from "../graphql/schema";

const server = new ApolloServer({
  schema,
});

server.listen(3333, () => {
  console.log("server is running in port 3333");
});
