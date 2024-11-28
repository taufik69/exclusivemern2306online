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
import ProductPage from "./pages/Prouduct/Index";
import ProductDetails from "./pages/ProuductDetails/Index";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootMainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/about" element={<ProductPage />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="/productdetails" element={<ProductPage />}></Route>
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
