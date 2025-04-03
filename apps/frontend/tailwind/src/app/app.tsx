// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import Header from '../components/Header';

import { Route, Routes, Link } from 'react-router-dom';
import LoadingExample from '../components/LoadingExample';
import MainLayout from '../layouts/MainLayout';

export function App() {
  return (
    <div>
      <Header />
      <div className="bg-indigo-500 h-1 font-mono"></div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <br />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold">Welcome Home!</h1>
              <br />
              This is the generated root route.{' '}
              <Link to="/page-1">Click here for page 1.</Link>
            </div>
          }
        />
        <Route
          path="/page-1"
          element={
            <MainLayout title="This is Page 1">
              <Link to="/">Click here to go back to home page.</Link>
            </MainLayout>
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
