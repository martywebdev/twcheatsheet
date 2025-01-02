import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import TWLayout from "../pages/TWLayout";
import App from "../App";
import TWBackground from "../pages/TWBackground";
import TWFilters from "../pages/TWFilters";
import TWButtons from "../pages/TWButtons";
import { lazy } from "react";
import ComponentLayout from "../layouts/ComponentLayout";
// import TWAvatar from "../pages/TWAvatar";
const TWAvatar = lazy (() => import('../pages/TWAvatar'))
const TWBadges = lazy(() => import('../pages/TWBadges'))
const TWCard = lazy(() => import('../pages/TWCard'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/background",
        element: <TWBackground />,
      },
      {
        path: "/layout",
        element: <TWLayout />,
      },
      {
        path: "/filters",
        element: <TWFilters />,
      },
      {
        path: '/components',
        element: <ComponentLayout />,
        children: [
          {
            path: "button",
            element: <TWButtons />,
            handle: {title: 'Button'}
          },
          {
            path: "avatar",
            element: <TWAvatar />,
            handle: {title: 'Avatar'}
          },
          {
            path: "badges",
            element: <TWBadges />,
            handle: {title: 'Badges'}
          },
          {
            path: "card",
            element: <TWCard />,
            handle: {title: 'Card'}
          },
        ]
      },
     
    ],
  },
]);
