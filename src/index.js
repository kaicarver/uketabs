import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { App, Navbar } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/test" render={(props) => <App {...props} test={true} />} />
          <Route path="/about" component={About} exact />
        </Switch>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

function About(props) {
  return (
    <div>
      <Navbar {...props}/>
      <main>
        <h1>About!</h1>
        <p>This is for getting the ukulele scores of various songs in a printable format.</p>
        <p>Click on the title of a song to see another.</p>
      </main>
    </div>
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
