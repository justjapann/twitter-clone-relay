import { Maybe } from "../../../../../../types/src/Maybe";
import { JWT_SECRET } from "../../../../../../server/src/environment";

const JWT_TOKEN_KEY = JWT_SECRET;

export const getAuthToken = () => localStorage.getItem(JWT_TOKEN_KEY!);

export const updateAuthToken = (token?: Maybe<string>) => {
  if (!token) {
    localStorage.removeItem(JWT_TOKEN_KEY!);
  } else {
    localStorage.setItem(JWT_TOKEN_KEY!, token);
  }
};
