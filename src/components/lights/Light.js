import React, { useState } from 'react'
import { BASE_URL } from '../../utils/baseURL.utils'
import { USERNAME } from '../../utils/username.utils'

const Light = ({ id, light }) => {

  const { name, state } = light

  const [ isOn, setIsOn ] = useState(state.on)

  const handleClick = () => {
    setIsOn(!isOn)
    fetch(`${BASE_URL}/${USERNAME}/lights/${id}/state`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"on": isOn})
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }

  return(
    <h1> {name} </h1>
  )
}

export default Light