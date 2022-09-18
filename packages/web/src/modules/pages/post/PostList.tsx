import React, { useEffect, useState } from 'react'
import { IPostEdge } from 'modules/types/PostType'
import { fetchGraphQL } from '../../../../relay/fetchGraphQL'
import PostsList from '../../../shared-components/Post/index'
import '../../../styles/Home.css'

const PostList = () => {
  const [postsList, setPostsList] = useState<IPostEdge[]>([])

  useEffect(() => {
    fetchGraphQL(`
      query Posts {
        posts {
          edges {
            node {
              id
              title
              body
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `).then((response) => {
      const data = response.data
      setPostsList(data.posts.edges)
      console.log(data)
    })
  }, [])

  return <PostsList postsList={postsList} setPostsList={setPostsList} />
}

export default PostList
