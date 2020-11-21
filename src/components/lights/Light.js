import React from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const Light = ({ id, light, toggleLight }) => {

  const { name, state: { on: isOn } } = light

  const handleClick = () => {
    toggleLight(id, !isOn)
  }

  return(
    <React.Fragment>
      <h1 style={{color: isOn ? 'green' : 'red' }} > {name} </h1>
      <FormControlLabel
        control={<Switch checked={isOn} onChange={handleClick} name="checkedA" color="primary"/>}
        label={isOn ? 'On' : 'Off'}
      />
      <hr/>
    </React.Fragment>
  )
}

export default Light