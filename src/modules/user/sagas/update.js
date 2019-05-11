import { select, put } from 'redux-saga/effects'
import { stopSubmit, startSubmit } from 'redux-form'
import request from 'utils/request'
import { showNotification } from 'modules/notification/actions'
import { UPDATE_USER_FORM_NAME } from '../constants'
import { userUpdated } from '../actions'

const update = function* (action) {

  const data = action.data

  // Remove null fields from data
  Object.keys(data).forEach(key => data[key] === null && delete data[key])

  // Prepare form data
  const formData = new FormData()
  Object.keys(data).forEach(key => formData.append(key, data[key]))

  try {
    yield put(startSubmit(UPDATE_USER_FORM_NAME))

    // Get current user's token
    const token = yield select(state => state.auth.token)

    // API request
    const response = yield request('/auth/me', {
      method: 'patch',
      data: formData,
      headers: {Authorization: 'Token ' + token},
    })

    yield put(stopSubmit(UPDATE_USER_FORM_NAME))

    yield put(userUpdated(response.data))
  } catch (error) {
    yield put(showNotification(`We couldn't update your settings. Please try again later.`))
  }
}

export default update
