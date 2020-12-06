import React from 'react'
import { HuePicker } from 'react-color'
import scale from '../../utils/scale.utils'

const ColorPicker = ({ id, hue, sat, updateLight }) => {

  const handleChange = ({ hsl }) => {
    const scaledHue = scale(hsl.h, "toBulb")
    updateLight(id, "hue", scaledHue)
  }

  const calibratedColor = color => {
    const newColor = scale(color, "toPicker")

    return { 
      h: newColor, 
      s: 1, 
      l: 0.5, 
      a: 1 
    }
  }

  return(
    <HuePicker 
      color={calibratedColor(hue)} 
      onChangeComplete={handleChange} 
    />
  )
}

export default ColorPicker