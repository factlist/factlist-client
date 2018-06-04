import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from 'modules/auth/reducer'
import userReducers from 'modules/user/reducers'
import claimReducer from 'modules/claim/reducer'
import evidenceReducer from 'modules/evidence/reducer'
import modalReducer from 'modules/modal/reducer'
import notificationReducer from 'modules/notification/reducer'

export default () => combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducers,
  claim: claimReducer,
  evidence: evidenceReducer,
  modal: modalReducer,
  notification: notificationReducer,
})
