import React from 'react'


const Light = ({ id, light, toggleLight }) => {

  const { name, state: { on: isOn } } = light

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