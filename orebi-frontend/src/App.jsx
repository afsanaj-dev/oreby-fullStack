import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./component/layout/Rootlayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route path="/login" element={<Login />}></Route>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop title="Shop"/>}></Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
