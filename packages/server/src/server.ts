import { ApolloServer } from "apollo-server";
import { schema } from "../graphql/schema";
import { setupDB, getDB } from "./databaseConnection";

const server = new ApolloServer({
  schema,
  context: {
    setupDB,
  },
});

server.listen(3333, () => {
  console.log("server is running in port 3333");
});
