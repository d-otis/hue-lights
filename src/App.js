import React, { Component } from 'react'
import LightsContainer from './containers/LightsContainer'
import GroupsContainer from './containers/GroupsContainer'
import { connect } from 'react-redux'
import { fetchLights } from './actions/lights.actions'
import { fetchGroups } from './actions/groups.actions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.fetchLights()
    this.props.fetchGroups()
  }

  render() {
    const { lights, groups } = this.props

    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lights">Lights</Link></li>
          <li><Link to="/groups">Groups</Link></li>
        </ul>
        <Route path="/lights" render={renderProps => <LightsContainer {...renderProps} lights={lights} />} />
        <Route path="/groups" render={renderProps => <GroupsContainer {...renderProps} groups={groups} lights={lights} />} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    lights: state.lights,
    groups: state.groups
  }
}

export default connect(mapStateToProps, { fetchLights, fetchGroups })(App);