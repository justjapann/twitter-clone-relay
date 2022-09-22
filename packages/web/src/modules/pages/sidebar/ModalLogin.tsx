import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { graphql, useMutation } from 'react-relay'
import type {
  ModalLoginMutation,
  ModalLoginMutation$data,
} from './__generated__/ModalLoginMutation.graphql'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 350,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
  borderRadius: 10,
}

function RegisterModal() {
  const _CreatePostMutation = graphql`
    mutation ModalLoginMutation($username: String!, $password: String!, $email: String!) {
      userRegisterMutation(input: { username: $username, password: $password, email: $email }) {
        user {
          username
          password
          email
        }
        token
        clientMutationId
      }
    }
  `

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [commit] = useMutation<ModalLoginMutation>(_CreatePostMutation)

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Sign up for Twitter</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box sx={style}>
          <div className='title-modal-login'>
            <h3>Register in Twitter</h3>
          </div>
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
              onClick={() =>
                commit({
                  variables: {
                    username,
                    email,
                    password,
                  },
                  onCompleted() {
                    console.log('thats it')
                  },
                })
              }
              className='button-login-modal'
            >
              Login
            </button>
          </div>
          <div className='container-modal-register'>
            <Button onClick={handleClose}>Sign in for Twitter</Button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default function ModalLogin() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button className='button-login' onClick={handleOpen}>
        Open modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='title-modal-login'>
            <h3>Log in in Twitter</h3>
          </div>
          <input className='input-login' placeholder='Your name' />
          <input className='input-login' type='password' placeholder='Your password' />

          <div className='container-button-login'>
            <button className='button-login-modal'>Login</button>
          </div>
          <div className='container-modal-register'>
            <RegisterModal />
          </div>
        </Box>
      </Modal>
    </div>
  )
}
