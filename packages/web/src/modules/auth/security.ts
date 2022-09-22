/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Maybe } from '../../../../types'
import { config } from '../../../../server/src/environment'

const JWT_TOKEN_KEY = config.JWT_SECRET

export const getAuthToken = () => localStorage.getItem(JWT_TOKEN_KEY!)

export const updateAuthToken = (token?: Maybe<string>) => {
  if (!token) {
    localStorage.removeItem(JWT_TOKEN_KEY!)
  } else {
    localStorage.setItem(JWT_TOKEN_KEY!, token)
  }
}
