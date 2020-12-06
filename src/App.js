import React, { Component } from 'react'
import LightsContainer from './containers/LightsContainer'
import { connect } from 'react-redux'
import { fetchLights } from './actions/lights.actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.fetchLights()
  }

  render() {
    const { lights } = this.props

    return (
      <Router>
        <Route path="/lights" render={renderProps => <LightsContainer {...renderProps} lights={lights} />} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    lights: state.lights
  }
}

export default connect(mapStateToProps, { fetchLights })(App);