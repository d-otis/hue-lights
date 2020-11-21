import React from 'react'

const Light = ({ id, light }) => {

  const { name } = light

  return(
    <h1> {name} </h1>
  )
}

export default Light