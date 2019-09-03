import React from 'react'
import PropTypes from 'prop-types'
import no_img from '../assets/pokeball.svg';

const PokeList = ({ onClick, name,id }) => (
  <li onClick={onClick}>
     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width={100} alt={name} onError={(ev)=>{ ev.target.onerror = null; ev.target.src=no_img }} />
    {name}
  </li>
)

export default PokeList