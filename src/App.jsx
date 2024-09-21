import { Outlet } from 'react-router-dom';
import React from 'react';
import Spinner from './Pages/Spinner';
const App = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      {/* <ToastContainer /> */}
      <Outlet />
    </React.Suspense>
  );
};

export default App;
