import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,

  SIGN_OUT_REQUEST
} from './constants'

export const signIn = ({ email, password }) => ({
  type: SIGN_IN_REQUEST,
  email,
  password
})

export const signInSuccess = ({ token }) => ({
  type: SIGN_IN_SUCCESS,
  token
})

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  error
})

export const signOut = () => ({
  type: SIGN_OUT_REQUEST
})
