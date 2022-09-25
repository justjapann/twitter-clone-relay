/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useParams, useNavigate } from 'react-router-dom'
import { UserQuery, UserQuery$data } from './__generated__/UserQuery.graphql'

export const User = () => {
  return (
    <div>
      <h1>User</h1>
    </div>
  )
}
