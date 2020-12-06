import React from 'react'
import { HuePicker } from 'react-color'
import scale from '../../utils/scale.utils'

const ColorPicker = ({ id, hue, sat, updateLight }) => {

  const handleChange = ({ hsl }) => {
    const scaledHue = scale(hsl.h, "toBulb")
    updateLight(id, "hue", scaledHue)
  }

  return(
    <HuePicker color={"#fff"} onChangeComplete={handleChange} />
  )
}

export default ColorPicker