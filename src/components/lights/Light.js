import React from 'react'


const Light = ({ id, light, toggleLight }) => {

  const { name, state: { on: isOn } } = light

  const handleClick = () => {
    toggleLight(id, !isOn)
  }

  return(
    <React.Fragment>
      <h1 style={{color: isOn ? 'green' : 'red' }} > {name} </h1>
      <button onClick={handleClick}>Turn {isOn ? 'Off' : 'On'}</button>
      <hr/>
    </React.Fragment>
  )
}

export default Light