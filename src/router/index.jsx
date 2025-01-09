import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import TWLayout from "../pages/TWLayout";
import App from "../App";
import TWBackground from "../pages/TWBackground";
import TWFilters from "../pages/TWFilters";
import TWButtons from "../pages/TWButtons";
import { lazy } from "react";
import ComponentLayout from "../layouts/ComponentLayout";
import { Suspense } from "react";
// import TWAvatar from "../pages/TWAvatar";
const TWAvatar = lazy(() => import("../pages/TWAvatar"));
const TWBadges = lazy(() => import("../pages/TWBadges"));
const TWCard = lazy(() => import("../pages/TWCard"));
const TWMenu = lazy(() => import("../pages/TWMenu"));
const TWSidebar = lazy(() => import("../pages/TWSidebar"));
const TWDarkmode = lazy(() => import("../pages/TWDarkmode"));
const TWDropdown = lazy(() => import("../pages/TWDropdown"));
const TWFooter = lazy(() => import("../pages/TWFooter"));
const TWAccordion = lazy(() => import("../pages/TWAccordion"));
const TWModal = lazy(() => import("../pages/TWModal"));

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
        path: "menu",
        element: <TWMenu />,
        handle: { title: "Menu" },
      },
      {
        path: "sidebar",
        element: <TWSidebar />,
        handle: { title: "sidebar" },
      },
      {
        path: "footer",
        element: <TWFooter />,
        handle: { title: "footer" },
      },
      {
        path: "/components",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ComponentLayout />
          </Suspense>
        ),
        children: [
          {
            path: "button",
            element: <TWButtons />,
            handle: { title: "Button" },
          },
          {
            path: "avatar",
            element: <TWAvatar />,
            handle: { title: "Avatar" },
          },
          {
            path: "badges",
            element: <TWBadges />,
            handle: { title: "Badges" },
          },
          {
            path: "card",
            element: <TWCard />,
            handle: { title: "Card" },
          },
          {
            path: "dark-mode",
            element: <TWDarkmode />,
            handle: { title: "Dark Mode" },
          },
          {
            path: "dropdown",
            element: <TWDropdown />,
            handle: { title: "Dropdown" },
          },
          {
            path: "accordion",
            element: <TWAccordion />,
            handle: { title: "Accordion" },
          },
          {
            path: "modal",
            element: <TWModal />,
            handle: { title: "Modal" },
          },
        ],
      },
    ],
  },
]);
