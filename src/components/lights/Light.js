import React from 'react'
import PowerSwitch from './PowerSwitch'

const Light = ({ id, light, ...otherProps }) => {

  const { name, state: { on: isOn } } = light

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