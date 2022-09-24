import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import '../../../styles/SideBar.css'

import { Link } from '../../../shared-components/Link'

import { useAuth } from '../../auth/useAuth'
import React from 'react'

const SignupOrLoginLink = ({ pathname }: { pathname: string }) => {
  const isSignupScreen = pathname === '/signup'

  const text = isSignupScreen ? 'Already a account?' : 'New to twitter?'
  const link = {
    to: isSignupScreen ? '/' : '/signup',
    text: isSignupScreen ? 'Log In' : 'Sign Up',
  }

  return (
    <Text mt='12px'>
      {text}{' '}
      <Link to={link.to} textTransform='uppercase'>
        {link.text}
      </Link>
    </Text>
  )
}

export const LoginLayout = () => {
  const { pathname } = useLocation()
  const { token } = useAuth()

  if (token) {
    return <Navigate to='/feed' replace />
  }

  /*  {pathname === '/signup' ? 'Sign Up' : 'Log In'}
  <SignupOrLoginLink pathname={pathname} /> */

  return (
    <Flex height='100vh'>
      <Flex className='loginLayout' flex='9' flexDirection='column' justifyContent='center'>
        <Flex flexDirection='column' maxW='360px' ml='30px'>
          <Heading className='loginTitle'>{pathname === '/signup' ? 'Sign Up' : 'Log In'}</Heading>
          <Box mt='64px'>
            <Outlet />
          </Box>
          <SignupOrLoginLink pathname={pathname} />
        </Flex>
      </Flex>
    </Flex>
  )
}
