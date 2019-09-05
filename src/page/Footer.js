import { compose } from 'redux'
import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { goBack } from 'connected-react-router'
import {clearQueryPush} from '../actions';
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  router: state.router,
})

const mapDispatchToProps = {
  goBack,
  push: clearQueryPush
}

export default compose(
  withRouter,
  connect(
  mapStateToProps,
  mapDispatchToProps
))(Footer)

