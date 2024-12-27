import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import TWLayout from '../pages/TWLayout'
import App from "../App";
import TWBackground from "../pages/TWBackground";

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
        path: "/background",
        element: <TWBackground />
      },
      {
        path: "/layout",
        element: <TWLayout />
      }
    ]
  },
]);
