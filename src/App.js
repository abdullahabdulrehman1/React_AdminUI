// import logo from "./logo.svg";
// import "./App.css";
import Home from "./pages/home/home";
import Users from "./pages/users/users";
import Products from "./pages/products/products";
import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
  Outlet,
} from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Menu from "./components/menu/menu";
import Login from "./pages/login/login";
import "./styles/global.scss";
/* Import Tailwind CSS base styles */

/* Your custom styles can go here */

function App() {
  const Layout = () => {
    return (
      <div className="main ">
        <Navbar />
        <div className="contianer  grid grid-cols-12  ">
          <div className="menuContainer  lg:mx-10 sm:mx-0  col-span-2  s">
            <Menu />
          </div>
          <div className="contentContainer  rounded  lg:col-span-10    mr-10 p-10 ">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
