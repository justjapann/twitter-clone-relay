import jwt from "jsonwebtoken";

import { Maybe } from "../../../types/src/Maybe";

import { UserModel, UserDocument } from "./UserModel";
import { JWT_SECRET } from "../../src/environment";

export const getUser = async (
  token: Maybe<string>
): Promise<Maybe<UserDocument>> => {
  if (!token) return null;

  // TODO: Maybe it should be a crime
  [, token] = token.split("JWT ");

  const decodedToken = jwt.verify(token, JWT_SECRET!) as unknown as {
    id: string;
  };

  const user = await UserModel.findOne({ _id: decodedToken.id });

  if (!user) return null;

  return user;
};

export const generateJwtToken = (userId: string) =>
  `JWT ${jwt.sign({ id: userId }, JWT_SECRET!)}`;
