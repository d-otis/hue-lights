import React from 'react'
import { HuePicker } from 'react-color'
import scale from '../../utils/scale.utils'

const ColorPicker = ({ id, hue, sat, updateLight }) => {
  const handleChange = color => {
    const scaledHue = Math.round(scale(color.hsl.h))
    console.log(scaledHue)
    updateLight(id, "hue", scaledHue)
  }

const ColorPicker = ({ hue, sat }) => {
  debugger
  return(
    <HuePicker />
  )
}

export default ColorPicker