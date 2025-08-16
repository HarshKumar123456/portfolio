import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";


import App from './App.jsx';
import "../src/index.css";
import Page404 from './pages/Page404.jsx';
import Games from './pages/Games.jsx';
import NimGame from './components/Games/NimGame/NimGame.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
  },

  {
    path: "/games",
    element: <Games />,
    errorElement: <Page404 />,
  },

  {
    path: "/games/nimgame",
    element: <NimGame />,
    errorElement: <Page404 />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);