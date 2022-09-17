import React, { Suspense } from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from '../relay/RelayEnvironment'
import User from './modules/UserQuery'
import Post from './modules/pages/CreatePost'
import Auth from './modules/Authen'
import { SignupPage } from './modules/pages/user/SingUp'
import { LoginPage } from './modules/pages/user/Login'

export default function Rootes() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Post />
    </RelayEnvironmentProvider>
  )
}
