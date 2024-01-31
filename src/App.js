import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RouterApp from './routes'
import store from 'redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterApp />
      </Provider>
    )
  }
}

export default App
