import React from 'react'
import { IPostEdge } from '../../modules/types/PostType'
import PostCard from './PostList'

function PostsList(props: { postsList: IPostEdge[] }) {
  const handlePrintMovies = () => {
    if (props.postsList) {
      return props.postsList.map((post, index) => <PostCard key={index} post={post} />)
    }
    return <p>Nothing</p>
  }

  return <div>{handlePrintMovies()}</div>
}

export default PostsList
