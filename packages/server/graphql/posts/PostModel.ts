import mongoose from 'mongoose'

const postsSchema = new mongoose.Schema({
  body: { type: String, required: true },
})

const posts = mongoose.model('posts', postsSchema)

export default posts
