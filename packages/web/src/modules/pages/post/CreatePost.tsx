import React, { Suspense, useState } from 'react'
import { graphql, useMutation } from 'react-relay'
import { useLazyLoadQuery } from 'react-relay/hooks'
import PostList from './PostList'
import type {
  CreatePostMutation$variables,
  CreatePostMutation$data,
} from './__generated__/CreatePostMutation.graphql'
// eslint-disable-next-line no-duplicate-imports
import type { CreatePostMutation } from './__generated__/CreatePostMutation.graphql'

const _CreatePostMutation = graphql`
  mutation CreatePostMutation($title: String!, $body: String!) {
    CreatePost(input: { title: $title, body: $body }) {
      postEdge {
        node {
          id
          title
          body
        }
      }
    }
  }
`

const Post = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [commit] = useMutation<CreatePostMutation>(_CreatePostMutation)

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {/*  <PostList query={query} /> */}
      <h1>Title</h1>
      <input placeholder='Enter your name' onChange={(e) => setTitle(e.target.value)}></input>

      <h1>Body</h1>
      <input placeholder='Enter your age' onChange={(e) => setBody(e.target.value)}></input>

      <button
        onClick={() =>
          commit({
            variables: {
              title,
              body,
            },
            onCompleted() {
              console.log('thats it')
            },
          })
        }
      >
        create post
      </button>
    </Suspense>
  )
}

export default Post
