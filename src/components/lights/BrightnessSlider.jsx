import React from 'react'

const BrightnessSlider = ({ id, brightness, updateBrightness }) => {

  const handleChange = e => {
    const newVal = Number(e.changedTouches[0].target.ariaValueNow) * 100
    updateBrightness(id, newVal)
  }

  return(
    <form>
      <input type="range" min={0} max={254} value={brightness} onChange={handleChange} />
    </form>
  )
}

export default BrightnessSlider