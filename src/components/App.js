import React, { Component } from 'react'
import './App.css'
import Header from './header/Header'
import Main from './main/Main'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    )
  }
}

export default App
