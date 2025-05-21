import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import HomePage from './Pages/HomePages/HomePage.jsx';
import SpecialtiesPage from './Pages/SpecialtiesPages/SpecialtiesPage.jsx';
import SpecialtiesInnerPage from './Pages/SpecialtiesPages/SpecialtiesInnerPage.jsx';
import SpecialistPage from './Pages/SpecialistPages/SpecialistPage.jsx';
import SpecialistInnerPage from './Pages/SpecialistPages/SpecialistInnerPage.jsx';
import AboutUs from './Pages/AboutUs/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>, 
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/services",
        element: <SpecialtiesPage />
      },
      {
        path: "/Category/:category",
        element: <SpecialtiesInnerPage />
      },
      {
        path: "/specialist",
        element: <SpecialistPage />
      },
      {
        path: "/doctor/:id",
        element: <SpecialistInnerPage />
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
