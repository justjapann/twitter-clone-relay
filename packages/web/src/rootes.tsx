import React, { Suspense } from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from '../relay/RelayEnvironment'
import Post from './modules/pages/CreatePost'

export default function Rootes() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Post />
    </RelayEnvironmentProvider>
  )
}
