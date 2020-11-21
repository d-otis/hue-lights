import React, { Component } from 'react'
import Light from './components/lights/Light'
import { connect } from 'react-redux'
import { fetchLights } from './actions/lights.actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchLights()
  }

  render() {
    return (
      <div>
        <Light />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lights: state.lights
  }
}

export default connect(mapStateToProps, { fetchLights })(App);