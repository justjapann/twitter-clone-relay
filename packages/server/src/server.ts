import { ApolloServer } from "apollo-server";
import { schema } from "../graphql/schema";
import { connectDatabase } from "./databaseConnection";

const server = new ApolloServer({
  schema,
});

connectDatabase()
  .then()
  .catch((error) => console.log(error));

server.listen(3333, () => {
  console.log("server is running in port 3333");
});
