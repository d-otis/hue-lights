import React from 'react'
import Light from '../components/lights/Light'
import { toggleLight } from '../actions/lights.actions'
import { connect } from 'react-redux'

const LightsContainer = ({ lights, ...otherProps }) => {
  return (
    Object.keys(lights).map(id => <Light key={id} id={id} light={lights[id]} {...otherProps} />)
  )
}

export default connect(null, { toggleLight })(LightsContainer)