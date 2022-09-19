import React, { Suspense, useState } from 'react'
import { graphql, useMutation } from 'react-relay'
import type { CreatePostMutation } from './__generated__/CreatePostMutation.graphql'
import '../../../styles/CreatePost.css'

const _CreatePostMutation = graphql`
  mutation CreatePostMutation($body: String!) {
    CreatePost(input: { body: $body }) {
      postEdge {
        node {
          id
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
    <div className='container-createPost'>
      <Suspense fallback={<h1>Loading</h1>}>
        {/*  <PostList query={query} /> */}

        <input
          className='input-post input-body'
          placeholder='Whats happening?'
          onChange={(e) => setBody(e.target.value)}
        />

        <button
          className='button-post'
          onClick={() =>
            commit({
              variables: {
                body,
              },
              onCompleted() {
                console.log('thats it')
              },
            })
          }
        >
          Create post
        </button>
      </Suspense>
    </div>
  )
}

export default Post
