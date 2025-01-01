import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import TWLayout from "../pages/TWLayout";
import App from "../App";
import TWBackground from "../pages/TWBackground";
import TWFilters from "../pages/TWFilters";
import TWButtons from "../pages/TWButtons";
import TWAvatar from "../pages/TWAvatar";

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
        path: "/button",
        element: <TWButtons />,
      },
      {
        path: "/avatar",
        element: <TWAvatar />,
      },
    ],
  },
]);
