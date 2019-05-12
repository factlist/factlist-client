import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'recompose'
import {withUnstated} from 'utils/unstated'
import ModalContainer from 'modules/modal/container'
import { signInWithTwitter } from 'modules/auth/actions'
import { signUp } from 'modules/user/actions'
import Container from '../SignIn/Container'
import H2 from '../SignIn/H2'
import H4 from '../SignIn/H4'
import TwitterLogin from '../SignIn/TwitterLogin'
import Seperator from '../SignIn/Seperator'
import Form from './Form'

class SignUpForm extends Component {
  onSubmit = this.onSubmit.bind(this)
  signInWithTwitter = this.signInWithTwitter.bind(this)

  signInWithTwitter() {
    const { signInWithTwitter } = this.props

    signInWithTwitter()
  }

  onSubmit(values) {
    const { signUp } = this.props

    signUp(values)
  }

  render() {
    const { requesting, modal } = this.props

    return (
      <Container>
        <H2>Hello, Factchecker!</H2>
        <H4>Sign up to add suspicious claims or submit evidences.</H4>

        <TwitterLogin onClick={this.signInWithTwitter} />

        <Seperator />

        <Form
          requesting={requesting}
          onSignInClick={() => modal.show('SignIn')}
          onSubmit={this.onSubmit} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  requesting: state.user.signUp.requesting,
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(signUp(data)),
  signInWithTwitter: () => dispatch(signInWithTwitter()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withUnstated({modal: ModalContainer}),
)(
  SignUpForm
)
