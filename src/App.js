import React, { Component } from 'react'
import LightsContainer from './containers/LightsContainer'
import { connect } from 'react-redux'
import { fetchLights } from './actions/lights.actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchLights()
  }

  render() {
    const { lights } = this.props
    
    return (
      <div>
        <LightsContainer lights={lights} />
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