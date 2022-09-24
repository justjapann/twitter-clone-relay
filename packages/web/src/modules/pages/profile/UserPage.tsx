import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useParams, useNavigate } from 'react-router-dom'
import type { UserPageQuery$data } from './__generated__/UserPageQuery.graphql'
import User from './User'

export const UserPage = () => {
  const { username } = useParams()
  const navigate = useNavigate()
  if (username?.length === 0) {
    navigate('/feed')
  }

  const { queryUser } = useLazyLoadQuery(
    graphql`
      query UserPageQuery($username: String!) {
        queryUser(username: $username) {
          username
          id
        }
      }
    `,
    { username: username },
    { fetchPolicy: 'store-or-network' },
  ) as UserPageQuery$data

  return (
    <div>
      {queryUser ? (
        <div className='user-column'>
          <User username={queryUser.username as string} userId={queryUser.id} displayName={''} />
        </div>
      ) : (
        <div className='user-column'>
          <h1>usuario nao encontrado</h1>
        </div>
      )}
    </div>
  )
}
