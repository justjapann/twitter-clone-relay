import React from 'react'
import { IPost, IPostEdge } from '../../modules/types/PostType'
import { fetchGraphQL } from '../../../relay/fetchGraphQL'
import '../../styles/Post.css'

export default function PostCard(props: {
  post: IPostEdge
  postsList: IPostEdge[]
  setPostsList: React.Dispatch<React.SetStateAction<IPostEdge[]>>
}) {
  const handleDeletePostOfList = (id: string) => {
    props.setPostsList((prev) => prev.filter((post) => post.node.id !== id))
  }

  const handleDeletePost = async (id: string) => {
    const variables = { id: id }
    fetchGraphQL(
      `
      mutation Posts($id: String!){
        DeletePost(input: {id: $id}) {
          error
          success
        }
      }
          `,
      variables,
    )
      .then((response) => {
        handleDeletePostOfList(id)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const card = (post: IPost) => (
    <div className='container-posts'>
      <h2 className='title-post'>{post.title}</h2>
      <h4 className='body-post'>{post.body}</h4>

      <button
        className='button-delete'
        onClick={() => {
          handleDeletePost(post.id)
        }}
      >
        Delete post
      </button>
    </div>
  )

  return (
    <div>
      <ul>
        <li>{card(props.post.node)}</li>
      </ul>
    </div>
  )
}
