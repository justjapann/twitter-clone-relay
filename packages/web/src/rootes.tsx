import React, { Suspense } from "react";
const { RelayEnvironmentProvider } = require("react-relay");
import { RelayEnvironment } from "../relay/RelayEnvironment";
import User from "./modules/UserQuery";
import Post from "./modules/pages/CreatePost";
import Delete from "./modules/pages/DeletePost";
import Te from "./modules/teste";

export default function Rootes() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Te />
    </RelayEnvironmentProvider>
  );
}
