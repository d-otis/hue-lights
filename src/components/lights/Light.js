import React from 'react'
import { connect } from 'react-redux'
import PowerSwitch from './PowerSwitch'
import BrightnessSlider from './BrightnessSlider'
import { updateBrightness } from '../../actions/lights.actions'

const Light = ({ id, light, toggleLight, updateBrightness }) => {

  const { name, state: { on: isOn } } = light

  const handleClick = () => {
    toggleLight(id, !isOn)
  }

  return(
    <React.Fragment>
      <h1 style={{color: isOn ? 'green' : 'red' }} > {name} </h1>
      <PowerSwitch isOn={isOn} handleClick={handleClick} />
      <BrightnessSlider brightness={brightness} id={id} />
      <hr/>
    </React.Fragment>
  )
}

export default connect(null, { updateBrightness })(Light)