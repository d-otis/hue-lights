import React from 'react'
import Light from '../components/lights/Light'

const LightsContainer = ({ lights }) => {

  return (
    Object.keys(lights).map(light => <Light light={light} />)
  )
}

export default LightsContainer