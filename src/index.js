import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './App/App'
import {DashboardView} from './App/DashboardView'
import {Form} from './Form'
import {PlaceDetails} from './PlaceDetails'
import {PlaceCompare} from './PlaceCompare'
import {NotFoundView} from './NotFoundView'
import {PlaceList} from './PlaceList'
import {TestComponent} from './TestComponent'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DashboardView}/>

      <Route path="/form" component={Form} />

      <Route path="/place-details" component={PlaceDetails}/>
      <Route path="/place-compare" component={PlaceCompare}/>
      <Route path="/place-list" component={PlaceList}/>
      <Route path="/test-component" component={TestComponent}/>

    </Route>

    <Route path="*" component={NotFoundView}/>
  </Router>,
  document.getElementById('root')
)
