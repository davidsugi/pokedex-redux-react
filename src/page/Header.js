import { compose } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { goBack } from 'connected-react-router'
import {clearQueryPush} from '../actions';
import { withRouter } from "react-router";

const mapStateToProps = (state,props) => ({
  router: state.router,
  back: props.back,
  title: props.title,
  search: props.search,
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
))(Header)

