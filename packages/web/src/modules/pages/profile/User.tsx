/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useParams, useNavigate } from 'react-router-dom'
import { UserQuery, UserQuery$data } from './__generated__/UserQuery.graphql'

export default function User({
  username,
  displayName,
  userId,
}: {
  username: string
  displayName: string
  userId?: string
}) {
  const { queryUser } = useLazyLoadQuery(
    graphql`
      query UserQuery {
        queryUser {
          username
        }
      }
    `,
    {},
    { fetchPolicy: 'store-or-network' },
  ) as UserQuery$data

  return (
    <div>
      <h1>User</h1>
    </div>
  )
}
