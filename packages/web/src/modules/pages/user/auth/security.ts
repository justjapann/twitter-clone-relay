import { Maybe } from "../../../../../../types/src/Maybe";

const JWT_TOKEN_KEY =
  "3ceaaad5d75a72fb884d6edecb6be93129336efd510c09cc113cba3f4bd20468e4989873d151f5c0b5e8d93863ca508b95751766e47bd90ddcc51214e9e5d40e";

export const getAuthToken = () => localStorage.getItem(JWT_TOKEN_KEY!);

export const updateAuthToken = (token?: Maybe<string>) => {
  if (!token) {
    localStorage.removeItem(JWT_TOKEN_KEY!);
  } else {
    localStorage.setItem(JWT_TOKEN_KEY!, token);
  }
};
