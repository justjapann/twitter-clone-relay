import React, { Suspense } from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from '../relay/RelayEnvironment'
import Post from './modules/pages/post/CreatePost'
import PostList from './modules/pages/post/PostList'
import Home from './modules/pages/Home'

export default function Rootes() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Home />
    </RelayEnvironmentProvider>
  )
}
