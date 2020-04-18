import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Switch>
        <Route path="/" component={App} exact />
        <Route path="/about" component={About} exact />

        </Switch>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

function About() {
  return (
    <div>About!</div>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
