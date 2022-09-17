import React, { Suspense } from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from '../relay/RelayEnvironment'
import Post from './modules/pages/post/CreatePost'
import PostList from './modules/pages/post/PostList'

export default function Rootes() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <PostList />
    </RelayEnvironmentProvider>
  )
}
