import { compose } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { goBack, push } from 'connected-react-router'

import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  router: state.router,
})

const mapDispatchToProps = {
  goBack,push
}

export default compose(
  withRouter,
  connect(
  mapStateToProps,
  mapDispatchToProps
))(Header)

