import React from 'react'
import PowerSwitch from './PowerSwitch'
import BrightnessSlider from './BrightnessSlider'
import ColorPicker from './ColorPicker'

const Light = ({ id, light, ...otherProps }) => {

  const { name, state: { on: isOn, bri: brightness } } = light

  return(
    <React.Fragment>
      <h1 style={{color: isOn ? 'green' : 'red' }} > {name} [{id}]</h1>
      <PowerSwitch isOn={isOn} {...otherProps} id={id} />
      <ColorPicker {...otherProps} hue={hue} sat={sat} />
      <BrightnessSlider brightness={brightness} id={id} {...otherProps} />
      <hr/>
    </React.Fragment>
  )
}

export default Light