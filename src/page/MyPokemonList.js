import { connect } from 'react-redux'
import MyPokeAdapter from '../components/MyPokeAdapter'
import { push } from 'connected-react-router'
import {releasePoke} from '../actions'

const mapStateToProps = state => ({
  pokemon: state.my_pokemon.data,
})

const mapDispatchToProps = {
  push,
  releasePoke
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPokeAdapter)