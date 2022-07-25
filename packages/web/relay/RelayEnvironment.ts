import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";
import dotenv from "dotenv";
import { fetchGraphQL } from "./fetchGraphQL";

dotenv.config();

const fetchRelay: FetchFunction = async (params, variables) =>
  fetchGraphQL(params.text as string, variables);

export const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

export const { MONGO_URI, PORT } = process.env;
