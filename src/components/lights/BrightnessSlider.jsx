import React from 'react'
import Slider from '@material-ui/core/Slider'

const BrightnessSlider = ({ id, brightness, updateLight }) => {

  const handleChange = (e, newVal) => {
    updateLight(id, "bri", newVal)
  }

  return(
    <form>
      <Slider onChange={handleChange} min={1} max={254} value={brightness} />
    </form>
  )
}

export default BrightnessSlider