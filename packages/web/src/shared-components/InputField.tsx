import { FormControl, FormErrorMessage, Input as ChakraInput, InputProps } from '@chakra-ui/react'
import { ErrorMessage, useField } from 'formik'
import React from 'react'

type Props = InputProps & {
  name: string
  shouldValidate?: boolean
}

export const InputField = ({ name, shouldValidate = false, ...rest }: Props) => {
  const [field, meta] = useField(name)

  const hasAnErrorAndHasBeenTouched = !!meta.error && meta.touched

  const propsWhenShouldValidateProps = {
    isInvalid: hasAnErrorAndHasBeenTouched,
  }

  return (
    <FormControl {...(shouldValidate ? propsWhenShouldValidateProps : {})}>
      <ChakraInput {...field} {...rest} />
      {shouldValidate && (
        <ErrorMessage name={name}>
          {(error) => (
            <FormErrorMessage data-testid={`error-message-${name}`} fontSize='xs' mt='0'>
              {error}
            </FormErrorMessage>
          )}
        </ErrorMessage>
      )}
    </FormControl>
  )
}
