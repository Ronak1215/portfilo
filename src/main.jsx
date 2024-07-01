import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from "react-router-dom";
import Home from './assets/components/Home.jsx';
import Footer from './assets/components/Footer.jsx';
import Corneto from './assets/components/projects/Corneto.jsx';
import Spotify from './assets/components/projects/Spotify.jsx';
import Pharmeasy from './assets/components/projects/Pharmeasy.jsx';
import Cello from './assets/components/projects/Cello.jsx';
import Dove from './assets/components/projects/Dove.jsx';
import Linenclub from './assets/components/projects/Linenclub.jsx';
import Mobil from './assets/components/projects/Mobil.jsx';
import Npci from './assets/components/projects/Npci.jsx';
import Nycil from './assets/components/projects/Nycil.jsx';
import Pampers from './assets/components/projects/Pampers.jsx';
import Tanishq from './assets/components/projects/Tanishq.jsx';
import Tvs from './assets/components/projects/Tvs.jsx';
import Wisper from './assets/components/projects/Wisper.jsx';
import Tresemme from './assets/components/projects/Tresemme.jsx';
import Zold from './assets/components/projects/Zold.jsx';
import Avvatar from './assets/components/projects/Avvatar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/corneto",
    element: <Corneto/>,
  },
  {
    path: "/pharmeasy",
    element: <Pharmeasy/>,
  },
  {
    path: "/spotify",
    element: <Spotify/>,
  },
  {
    path: "/cello",
    element: <Cello/>,
  },
  {
    path: "/dove",
    element: <Dove/>,
  },
  {
    path: "/linenclub",
    element: <Linenclub/>,
  },
  {
    path: "/mobil",
    element: <Mobil/>,
  },
  {
    path: "/npci",
    element: <Npci/>,
  },
  {
    path: "/nycil",
    element: <Nycil/>,
  },
  {
    path: "/pampers",
    element: <Pampers/>,
  },
  {
    path: "/tanishq",
    element: <Tanishq/>,
  },
  {
    path: "/tvs",
    element: <Tvs/>,
  },
  {
    path: "/wisper",
    element: <Wisper/>,
  },
  {
    path: "/tresemme",
    element: <Tresemme/>,
  },
  {
    path: "/zold",
    element: <Zold/>,
  },
  {
    path: "/avvatar",
    element: <Avvatar/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
