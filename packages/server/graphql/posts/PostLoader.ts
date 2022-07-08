import { readDatabase } from "../../src/utils/index";

export async function loadAll() {
  const posts = await readDatabase("posts");

  if (!posts) {
    return null;
  }

  return posts.reverse();
}
