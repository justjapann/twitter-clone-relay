import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-relay'
import { UserRegister } from './UserRegisterMutation'
import { useAuth } from '../../auth/useAuth'

import type {
  UserRegisterMutation,
  UserRegisterMutation$data,
} from './__generated__/UserRegisterMutation.graphql'

export default function RegisterModal() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [commit] = useMutation<UserRegisterMutation>(UserRegister)

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
        onChange={(e) => setEmail(e.target.value)}
        className='input-login'
        placeholder='Your email'
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
                email,
              },
              onCompleted({ userRegisterMutation }: UserRegisterMutation$data) {
                signin(userRegisterMutation?.token, () => {
                  navigate('/feed', { replace: true })
                })
              },
            })
          }}
          className='button-login-modal'
        >
          Register
        </button>
      </div>
    </div>
  )
}
