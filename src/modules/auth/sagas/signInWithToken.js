import { put } from 'redux-saga/effects'
import request from 'utils/request'
import { showNotification } from 'modules/notification/actions'
import { saveToken } from 'utils/storage'
import { signInSuccess, signInFailure } from '../actions'

const signInWithToken = function* ({ token }) {
  try {
    // Get user's info with token
    const response = yield request('/auth/me', {
      headers: {Authorization: 'Token ' + token},
    })

    yield put(signInSuccess({
      token,
      user: response.data,
    }))

    // Store user's token in local storage to keep user authenticated
    saveToken(token)
  } catch (error) {
    yield put(showNotification(`Sorry, we couldn't authenticate. Please try again later.`))
    yield put(signInFailure())
  }
}

export default signInWithToken
