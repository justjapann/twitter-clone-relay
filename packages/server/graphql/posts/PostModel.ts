import mongoose from 'mongoose'

const postsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
})

const posts = mongoose.model('posts', postsSchema)

export default posts
