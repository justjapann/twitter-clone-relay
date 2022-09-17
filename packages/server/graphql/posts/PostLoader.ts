import posts from './PostModel'

export async function getAll() {
  const postsList = await posts.find({})
  if (!postsList) {
    return null
  }
  return postsList
}
