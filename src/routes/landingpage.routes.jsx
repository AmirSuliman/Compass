
import React, { lazy } from 'react';

// Lazy loading the LandingPage component
const LandingPage = lazy(() => import('../Pages/LandingPage/LandingPage'));

// Define and export the routes
const landingPageRoutes = {
  routes: [
    {
      path: '/landing',  // This is the route where LandingPage will be rendered
      element: <LandingPage />,
    },
  ],
};

export default landingPageRoutes;
