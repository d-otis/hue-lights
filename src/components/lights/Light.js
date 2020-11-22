import React from 'react'
import PowerSwitch from './PowerSwitch'

const Light = ({ id, light, toggleLight }) => {

  const { name, state: { on: isOn } } = light

  // const handleClick = () => {
  //   toggleLight(id, !isOn)
  // }
  console.log(`${name} == ${isOn ? 'ON' : 'OFF' }`)

  return(
    <React.Fragment>
      <h1 style={{color: isOn ? 'green' : 'red' }} > {name} </h1>
      <PowerSwitch isOn={isOn} toggleLight={toggleLight} id={id} />
      {/* <BrightnessSlider brightness={brightness} id={id} updateBrightness={updateBrightness} /> */}
      <hr/>
    </React.Fragment>
  )
}

export default Light