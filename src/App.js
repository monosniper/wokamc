import React from 'react';
import './styles/App.scss';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Punishments from "./pages/punishments";
import Policy from "./pages/policy";
import Rules from "./pages/rules";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/punishments",
        element: <Punishments/>,
    },
    {
        path: "/policy",
        element: <Policy/>,
    },
    {
        path: "/rules",
        element: <Rules/>,
    },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
