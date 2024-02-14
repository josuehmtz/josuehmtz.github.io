import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { childrenPagesRoutes, PagesRoutes } from "../pages";
import * as pages from '../pages'
import * as components from '../components'

const router = createBrowserRouter([
    {
      path: "/",
      element:<PagesRoutes />,
      children: childrenPagesRoutes
    },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
