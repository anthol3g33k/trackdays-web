import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../home/Home'
import Events from '../events/Events'
import Racetracks from '../racetracks/Racetracks'
import Photos from '../photos/Photos'
import Lessons from '../lessons/Lessons'
import Login from '../login/Login'

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Home }/>
        <Route path="/events" component={ Events } />
        <Route path="/racetracks" component={ Racetracks } />
        <Route path="/photos" component={ Photos } />
        <Route path="/lessons" component={ Lessons } />
        <Route path="/login" component={ Login } />
      </div>
    )
  }
}

export default Main
