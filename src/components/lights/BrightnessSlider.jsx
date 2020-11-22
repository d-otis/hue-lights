import React from 'react'
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles';

const BrightnessSlider = ({ id, brightness, updateBrightness }) => {

  const handleChange = e => {
    const newVal = Number(e.changedTouches[0].target.ariaValueNow) * 100
    updateBrightness(id, newVal)
  }

  const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);


  return(
    <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" value={brightness / 100} onChange={handleChange} />
  )
}

export default BrightnessSlider