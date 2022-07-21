import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/header";
const Index = React.lazy(() => import("./index/index"));
const File = React.lazy(() => import("./file"));
const Gm = React.lazy(() => import("./gm"));
const App = () => {
  return useRoutes([
    { path: "/", element: <Index></Index> },
    { path: "/file", element: <File></File> },
    { path: "/game", element: <Gm></Gm> },
  ]);
};

const routes = () => {
  return (
    <div>
      <Header></Header>
      <App></App>
    </div>
  );
};

export default routes;