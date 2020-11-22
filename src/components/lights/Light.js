import React from 'react'
import PowerSwitch from './powerSwitch'

const Light = ({ id, light, toggleLight }) => {

  const { name, state: { on: isOn } } = light

  const handleClick = () => {
    toggleLight(id, !isOn)
  }

  return(
    <React.Fragment>
      <h1 style={{color: isOn ? 'green' : 'red' }} > {name} </h1>
      <PowerSwitch isOn={isOn} handleClick={handleClick} />
      <hr/>
    </React.Fragment>
  )
}

export default Light