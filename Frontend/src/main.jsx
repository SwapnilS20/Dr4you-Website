import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import HomePage from './Pages/HomePage.jsx';
import SpecialtiesPage from './Pages/SpecialtiesPage.jsx';

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
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
