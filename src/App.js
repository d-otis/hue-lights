import React, { Component } from 'react'
import LightsContainer from './containers/LightsContainer'
import GroupsContainer from './containers/GroupsContainer'
import { connect } from 'react-redux'
import { fetchLights } from './actions/lights.actions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.fetchLights()
  }

  render() {
    const { lights } = this.props

    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lights">Lights</Link></li>
        </ul>
        <Route path="/lights" render={renderProps => <LightsContainer {...renderProps} lights={lights} />} />
        <Route path="/groups" render={renderProps => <GroupsContainer {...renderProps} groups={groups} />} />
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