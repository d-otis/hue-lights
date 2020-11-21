import React from 'react'
import Light from '../components/lights/Light'

const LightsContainer = ({ lights }) => {

  return (
    Object.keys(lights).map(id => <Light key={id} id={id} light={lights[id]} />)
  )
}

export default LightsContainer