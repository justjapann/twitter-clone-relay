import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'
import React from 'react'

export const buttonTheme = {
  baseStyle: {
    outline: 'none',
    width: '100%',
  },
  variants: {
    solid: {
      bgColor: 'blue.400',
      color: 'white',
      _hover: {
        bgColor: 'blue.500',
      },
    },
  },
}

export const Button = (props: ButtonProps) => <ChakraButton {...props} />
