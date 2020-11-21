import React, { useState } from 'react'
import { BASE_URL } from '../../utils/baseURL.utils'
import { USERNAME } from '../../utils/username.utils'

const Light = ({ id, light }) => {

  const { name } = light

  return(
    <h1> {name} </h1>
  )
}

export default Light