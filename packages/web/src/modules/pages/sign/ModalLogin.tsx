import React, { useState } from 'react'
import { useMutation } from 'react-relay'
import { UserLogin } from './UserLoginMutation'
import { useAuth } from '../../auth/useAuth'
import { useNavigate } from 'react-router-dom'

import type {
  UserLoginMutation,
  UserLoginMutation$data,
} from './__generated__/UserLoginMutation.graphql'

export default function ModalLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [commit] = useMutation<UserLoginMutation>(UserLogin)
  const { signin } = useAuth()
  const navigate = useNavigate()

  return (
    <div>
      <input
        onChange={(e) => setUsername(e.target.value)}
        className='input-login'
        placeholder='Your name'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className='input-login'
        type='password'
        placeholder='Your password'
      />

      <div className='container-button-login'>
        <button
          onClick={() => {
            commit({
              variables: {
                username,
                password,
              },
              onCompleted({ userLoginMutation }: UserLoginMutation$data) {
                signin(userLoginMutation?.token, () => {
                  navigate('/feed', { replace: true })
                })
              },
            })
          }}
          className='button-login-modal'
        >
          Login
        </button>
      </div>
    </div>
  )
}
