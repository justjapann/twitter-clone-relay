import React from 'react'
import { IPostEdge } from '../../types/PostType'
import PostCard from './RenderPost'

function PostsList(props: {
  postsList: IPostEdge[]
  setPostsList: React.Dispatch<React.SetStateAction<IPostEdge[]>>
}) {
  const handlePrintPosts = () => {
    if (props.postsList) {
      return props.postsList.map((post, index) => (
        <PostCard
          key={index}
          postsList={props.postsList}
          setPostsList={props.setPostsList}
          post={post}
        />
      ))
    }
    return <p>Nothing</p>
  }

  return <div>{handlePrintPosts()}</div>
}

export default PostsList
