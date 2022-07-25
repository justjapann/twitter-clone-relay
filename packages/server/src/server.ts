import { ApolloServer } from "apollo-server";
import { schema } from "../graphql/schema";
<<<<<<< HEAD
import { connectDatabase } from "./databaseConnection";
=======
import { setupDB, getDB } from "./databaseConnection";
>>>>>>> parent of 2ee61b9 (fixed: apollo server and mongodb)

const server = new ApolloServer({
  schema,
  context: {
    setupDB,
  },
});

connectDatabase()
  .then()
  .catch((error) => console.error(error));

server.listen(3333, () => {
  console.log("server is running in port 3333");
});
