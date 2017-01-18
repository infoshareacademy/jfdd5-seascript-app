import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./index.css";
import App from "./App/App";
import {DashboardView} from "./App/DashboardView";
import {Form} from "./Form";
import {PlaceDetails} from "./PlaceDetails";
import {PlaceCompare} from "./PlaceCompare";
import {NotFoundView} from "./NotFoundView";
import {PlaceList} from "./PlaceList";
import {Favorites} from "./Favorites";
import {LoginFormView} from "./LoginForm";
import {RegistrationFormView} from "./RegistrationForm";
import {Provider} from "react-redux";
import store from "./store";


import {fetchWeather} from './state/weather/actionCreators'
const fetchWeatherFromApi = () => {
  store.dispatch(fetchWeather())
}
const fetchWeatherForList = () => {
  console.log(store.getState())
  store.getState()
  console.log(store.attractionsData)
  store.dispatch(fetchWeather('Seattle'))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DashboardView}/>

        <Route path="/form" component={Form}/>
        <Route path="/place-details/:placeName" component={PlaceDetails} onEnter={fetchWeatherFromApi}/>
        <Route path="/place-compare" component={PlaceCompare}/>
        <Route path="/place-list" component={PlaceList} onEnter={fetchWeatherForList}/>


        <Route path="/favorites" component={Favorites} onEnter={(nextState, replace) => {
          if (store.getState().logInStatusData.session === null) {
            replace(`/login-form`)
          }
        }}/>

        <Route path="/login-form" component={LoginFormView}/>
        <Route path="/registration-form" component={RegistrationFormView}/>

      </Route>

      <Route path="*" component={NotFoundView}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
