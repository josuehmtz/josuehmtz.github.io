import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as pages from '../pages'
import * as components from '../components'

const router = createBrowserRouter([
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
      path: "/",
      element:<pages.About />,
    },
  ]);

export const AppRouter = () => {
  return (
    <>
      <components.NavBar />
      <RouterProvider router={router} />
    </>
  )
}
