import React from 'react'
import PropTypes from 'prop-types'

const PokeList = ({ onClick, name }) => (
  <li onClick={onClick}>
    {name}
  </li>
)

export default PokeList