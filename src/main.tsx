import "./index.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";

//Pages
import Root from "./routes/Root";
import Home from "./routes/Home";
import Playlists from "./routes/Playlists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/playlists",
        element: <Playlists />,
      },
      {
        path: "/playlists/:playlistId",
        element: <div></div>,
      },
      {
        path: "/",
        element: <Home />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
