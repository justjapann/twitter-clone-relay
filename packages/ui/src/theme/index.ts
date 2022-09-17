import { extendTheme } from '@chakra-ui/react'
import { Theme } from '@chakra-ui/theme'

import { DeepPartial } from '../../../types/src/DeepPartial'

import { buttonTheme as Button } from '../Button'

const overrides: DeepPartial<Theme> = {
  components: {
    Button,
  },
  // TODO: In the future, implements dark theme
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
}

export const theme = extendTheme(overrides)
