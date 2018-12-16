import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store'
import routes from './config/routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map(route => <Route {...route} />)}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
