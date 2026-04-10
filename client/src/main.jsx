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
import MoveSofaGame from './components/Games/MoveSofaGame/MoveSofaGame.jsx';
import SponsorMe from './pages/SponsorMe.jsx';
import Projects from './pages/Projects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
  },

  {
    path: "/sponsor",
    element: <SponsorMe />,
    errorElement: <Page404 />,
  },

  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Page404 />,
  },

  {
    path: "/games",
    element: <Games />,
    errorElement: <Page404 />,
  },

  {
    path: "/games/move-sofa-game",
    element: <>
      <MoveSofaGame />
    </>,
    errorElement: <Page404 />,
  },

  {
    path: "/games/nim-game",
    element: <>
      <div className="text-4xl text-center text-white" >
        Hello I am Games/Nim Game
      </div>
    </>,
    errorElement: <Page404 />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);