import React from 'react'

const GroupsContainer = ({ groups, lights }) => {

  const generateGroups = () => {
    return (
      Object.keys(groups).map(groupId => {
        const lightIds = groups[groupId].lights
        return (
          <div>
            <h1>{groups[groupId].name}</h1>
            Lights:
            <ul>
              {lightIds.map(lightId => <li>{lights[lightId].name}</li>)}
            </ul>
          </div>
        )
      })
    )
  }

  return(
    generateGroups()
  )
}

export default GroupsContainer