import React from 'react';
import './styles/App.scss';
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Punishments from "./pages/punishments";
import Policy from "./pages/policy";
import Rules from "./pages/rules";
import {RootStoreContext} from "./root-store-context";
import RootStore from "./store/root";

const router = createHashRouter([
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
  return <RootStoreContext.Provider value={new RootStore()}>
      <RouterProvider router={router} />
  </RootStoreContext.Provider>;
};

export default App;
