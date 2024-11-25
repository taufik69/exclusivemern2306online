import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";
import Homepage from "./pages/Home/Index";
import { RootMainLayout } from "./components/RootLayout/RootMainLayout";
import Breadcrumbs from "./components/CommonCoponents/BreadCrumb";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootMainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/about" element={<Breadcrumbs />}></Route>
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
