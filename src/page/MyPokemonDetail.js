import { compose } from 'redux'
import { connect } from 'react-redux'
import MyPokeView from '../components/MyPokeView'
import { goBack } from 'connected-react-router'

import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  pokemon: state.my_pokemon.data,
})

const mapDispatchToProps = {
  goBack
}

export default compose(
  withRouter,
  connect(
  mapStateToProps,
  mapDispatchToProps
))(MyPokeView)

