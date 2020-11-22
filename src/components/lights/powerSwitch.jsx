import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const PowerSwitch = ({ isOn, handleClick }) => {

  return(
    <FormControlLabel
    control={<Switch checked={isOn} onChange={handleClick} name="checkedA" color="primary"/>}
    label={isOn ? 'On' : 'Off'}
  />
  )
}

export default PowerSwitch