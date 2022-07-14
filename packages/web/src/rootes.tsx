import React, { Suspense } from "react";
const { RelayEnvironmentProvider } = require("react-relay");
import { RelayEnvironment } from "../relay/RelayEnvironment";
import User from "./modules/UserQuery";

export default function Rootes() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <User />
    </RelayEnvironmentProvider>
  );
}
