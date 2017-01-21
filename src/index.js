import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
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
import {CalendarView} from "./CalendarView";
import {Provider} from "react-redux";
import store from "./store";


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DashboardView}/>

        <Route path="/form" component={Form}/>
        <Route path="/place-details/:placeName/:attractionName" component={PlaceDetails}/>
        <Route path="/place-compare" component={PlaceCompare}/>
        <Route path="/place-list" component={PlaceList}/>

        <Route path="/favorites" component={Favorites} onEnter={(nextState, replace) => {
          if (store.getState().logInStatusData.session === null) {
            replace(`/login-form`)
          }
        }}/>

        <Route path="/calendar" component={CalendarView}/>

        <Route path="/login-form" component={LoginFormView}/>
        <Route path="/registration" component={RegistrationFormView}/>

      </Route>

      <Route path="*" component={NotFoundView}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

