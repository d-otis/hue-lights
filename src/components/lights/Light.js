import React from 'react'
import PowerSwitch from './PowerSwitch'
import BrightnessSlider from './BrightnessSlider'

const Light = ({ id, light, ...otherProps }) => {

  const { name, state: { on: isOn, bri: brightness } } = light

  return(
    <React.Fragment>
      <h1 style={{color: isOn ? 'green' : 'red' }} > {name} [{id}]</h1>
      <PowerSwitch isOn={isOn} {...otherProps} id={id} />
      {/* <BrightnessSlider brightness={brightness} id={id} updateBrightness={updateBrightness} /> */}
      <hr/>
    </React.Fragment>
  )
}

export default Light