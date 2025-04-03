// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { useEffect, useState } from 'react';
import { getGreetings } from '../services/greetings';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { Greeting } from '@playground/types';
import LoadingExample from './LoadingExample';


export function App() {
  return (
    <div>
      <NxWelcome title="@playground/welcome" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-1">Page 2</Link>
          </li>
          <li>
            <Link to="/loading-example">Loading Example</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-1">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-1"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
        <Route
          path="/loading-example"
          element={
            <div>
              <LoadingExample />
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
