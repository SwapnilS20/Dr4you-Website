import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import HomePage from './Pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
