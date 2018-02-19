import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './components/App'
import Welcome from './components/Welcome'
import Addcoin from './components/Addcoin'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/addcoin" component={Addcoin} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
