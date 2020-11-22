import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const PowerSwitch = ({ id, isOn, updateLight }) => {
  // debugger
  return(
    <FormControlLabel
    control={<Switch checked={isOn} onChange={() => toggleLight(id, !isOn)} name="checkedA" color="primary"/>}
    label={isOn ? 'On' : 'Off'}
  />
  )
}

export default PowerSwitch