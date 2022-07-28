import React, { Suspense, useState } from "react";
import { graphql } from "react-relay";
import { useLazyLoadQuery } from "react-relay/hooks";
import PostList from "./PostList";
import mongoose from "mongoose";
import { schema } from "../../../server/graphql/schema";

const Auth = () => {
  return <h1>teste</h1>;
};

export default Auth;
