import { connect } from 'react-redux'
import MyPokeAdapter from '../components/MyPokeAdapter'
import { push } from 'connected-react-router'


const mapStateToProps = state => ({
  pokemon: state.my_pokemon.data,
})

const mapDispatchToProps = {
  push,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPokeAdapter)