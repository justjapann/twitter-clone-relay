import React, { useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { FormikProvider, Form, useFormik } from 'formik'
import * as Yup from 'yup'

import { VStack, Button, ErrorText } from '../../../../../ui/src'

import { InputField } from '../../../shared-components/InputField'

import { useAuth } from './auth/useAuth'

import { UserRegister } from './UserRegisterMutation'
import type { UserRegisterMutation } from './__generated__/UserRegisterMutation.graphql'

export const SignupPage = () => {
  const [error, setError] = useState({
    status: false,
    message: '',
  })

  const [userRegister, isPending] = useMutation<UserRegisterMutation>(UserRegister)

  const formikValue = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Email is required'),
      username: Yup.string()
        .min(3, 'The username needs at least 3 characters')
        .max(25)
        .required('Username is required'),
      // TODO: The rules to write a safe password need to be improved adding some
      password: Yup.string()
        .min(8, 'The password needs at least 8 characters')
        .required('Password is required'),
    }),
    onSubmit: (values, actions) => {
      userRegister({
        variables: values,
        onCompleted: ({ userRegisterMutation }: any, error) => {
          if (error && error.length > 0) {
            const inputs: Array<keyof typeof values> = ['email', 'password', 'username']

            inputs.forEach((input) => {
              actions.setFieldValue(input, '', false)
              actions.setFieldTouched(input, false)
            })

            actions.setSubmitting(false)

            setError({ status: true, message: error[0].message })
            return
          }
        },
      })
    },
  })

  const { isSubmitting, isValid } = formikValue

  return (
    <FormikProvider value={formikValue}>
      <Form>
        <VStack alignSelf='center' spacing='12px'>
          <InputField name='email' type='email' placeholder='Email' shouldValidate />
          <InputField name='username' placeholder='Username' shouldValidate />
          <InputField name='password' type='password' placeholder='Password' shouldValidate />
          <Button type='submit' disabled={!isValid || isPending}>
            {isSubmitting ? <Spinner /> : 'Sign up'}
          </Button>
        </VStack>
        {error.status && <ErrorText>{error.message}</ErrorText>}
      </Form>
    </FormikProvider>
  )
}
