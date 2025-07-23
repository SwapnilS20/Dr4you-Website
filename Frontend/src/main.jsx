import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./Pages/HomePages/HomePage.jsx";
import SpecialtiesPage from "./Pages/SpecialtiesPages/SpecialtiesPage.jsx";
import SpecialtiesInnerPage from "./Pages/SpecialtiesPages/SpecialtiesInnerPage.jsx";
import SpecialistPage from "./Pages/SpecialistPages/SpecialistPage.jsx";
import SpecialistInnerPage from "./Pages/SpecialistPages/SpecialistInnerPage.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import BlogPage from "./Pages/BlogPages/BlogPage.jsx";
import BlogInnerPage from "./Pages/BlogPages/BlogInnerPage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import LoginPage from "./Pages/Login/LoginPage.jsx";

import { Provider } from "react-redux";
import {store , persistor} from "./App/store.js";
import TestimonialPage from "./Pages/TestimonialsPage/TestimonialPage.jsx";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <SpecialtiesPage />,
      },
      {
        path: "/Category/:category",
        element: <SpecialtiesInnerPage />,
      },
      {
        path: "/specialists",
        element: <SpecialistPage />,
      },
      {
        path: "/doctor/:id",
        element: <SpecialistInnerPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogInnerPage />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/testimonials",
        element: <TestimonialPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>  
  </Provider>
);
