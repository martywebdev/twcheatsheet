import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import TWLayout from '../pages/TWLayout'
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/layout",
        element: <TWLayout />
      }
    ]
  },
]);
