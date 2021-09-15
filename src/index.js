import React from "react";
import ReactDOM from "react-dom";

import { rootReducer } from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
  Redirect,
} from "react-router-dom";

import App from "./common/App";
import Details from "./common/details/Details";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={HashRouter}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/details/:id" component={Details} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
