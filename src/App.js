import React, { Component } from 'react'
import Light from './components/lights/Light'
import {BASE_URL} from './utils/baseURL.utils'
import {USERNAME} from './utils/username.utils'

class App extends Component {

  componentDidMount() {
    fetch(`${BASE_URL}/${USERNAME}`)
      .then(res => res.json())
      .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <Light />
      </div>
    );
  }
}

export default App;