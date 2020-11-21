import React from 'react'
import Light from '../components/lights/Light'

const LightsContainer = ({ lights }) => {

  return (
    Object.keys(lights).map(id => <Light light={lights[id]} />)
  )
}

export default LightsContainer