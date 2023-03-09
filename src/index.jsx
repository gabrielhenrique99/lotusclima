/*import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Clima from './routes/Clima';
import Detalhes from './routes/Detalhes';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Clima />,
      },
      {
        path: "/detalhes",
        element: <Detalhes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root").render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
))*/

import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
