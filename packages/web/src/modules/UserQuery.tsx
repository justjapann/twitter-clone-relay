import React, { Suspense, useState } from 'react'
import { graphql } from 'react-relay'
import { useLazyLoadQuery } from 'react-relay/hooks'
import PostList from './PostList'

const User = () => {
  const query = useLazyLoadQuery(
    graphql`
      query UserQuery {
        ...PostList_query
      }
    `,
    {},
  )

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <PostList query={query} />
    </Suspense>
  )
}

export default User
