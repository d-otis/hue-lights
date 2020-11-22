import React from 'react'

const BrightnessSlider = ({ id, brightness, updateLight }) => {

  const handleChange = e => {
    updateLight(id, "bri", Number(e.target.value))
  }

  return(
    <form>
      <input type="range" min={0} max={254} value={brightness} onChange={handleChange} />
    </form>
  )
}

export default BrightnessSlider