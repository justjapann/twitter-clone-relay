import React from 'react'
import { IPost, IPostEdge } from '../../modules/types/PostType'

const card = (post: IPost) => (
  <React.Fragment>
    <h1>{post.title}</h1>
    <h1>{post.body}</h1>
  </React.Fragment>
)

export default function PostCard(props: { post: IPostEdge }) {
  return (
    <div>
      <ul>
        <li>{card(props.post.node)}</li>
      </ul>
    </div>
  )
}
