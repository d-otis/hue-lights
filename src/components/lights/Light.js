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
    <React.Fragment>
      <h1 style={{color: isOn ? 'green' : 'red' }} > {name} </h1>
      <button onClick={handleClick}>Turn {isOn ? 'Off' : 'On'}</button>
      <hr/>
    </React.Fragment>
  )
}

export default Light