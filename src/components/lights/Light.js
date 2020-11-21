import React from 'react'

const Light = ({ light }) => {

  const { name } = light

  return(
    <h1> {name} </h1>
  )
}

export default Light