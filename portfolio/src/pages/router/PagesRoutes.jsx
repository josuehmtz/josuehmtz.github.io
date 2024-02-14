import { Navigate, Outlet } from "react-router-dom";
import { Footer, NavBar } from "../../components";
import * as pages from "../"

export const childrenPagesRoutes = [
  {
    path: "/about",
    element:<pages.About />,
  },
  {
    path: "/experience",
    element:<pages.Experience />,
  },
  {
    path: "/projects",
    element:<pages.Projects />,
  },
  {
    path: "/contact",
    element:<pages.Contact />,
  },
  {
    path: "/*",
    element:<Navigate to={"/about"} />,
  },
  {
    path: "/",
    element:<Navigate to={"/about"} />,
  },
];


export const PagesRoutes = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  )
}
