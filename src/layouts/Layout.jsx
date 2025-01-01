import { Link, Outlet, useLocation } from "react-router-dom";
import { tailwindClasses } from "../data/tailwindData";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { components } from "../data/component";

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">Sidebar</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              {tailwindClasses.map((tailwindClass, index) => (
                <div className="mb-4" key={index}>
                  {/* Link */}
                  <Link
                    to={tailwindClass.path}
                    className="block text-blue-400 mb-2 hover:underline"
                    onClick={(e) => e.stopPropagation()} // Prevent dropdown toggle
                  >
                    {tailwindClass.title}
                  </Link>

                  {/* Dropdown */}
                  {tailwindClass.sections.map((section, index) => (
                    <details
                      key={index}
                      className={`${
                        location.pathname === tailwindClass.path
                          ? "block"
                          : "hidden"
                      } bg-gray-700 rounded-md px-4 py-2 text-gray-100 hover:bg-gray-600`}
                    >
                      <summary className="cursor-pointer">
                        {section.category}
                      </summary>
                      <div className="mt-2">
                        {section.elements.map((element, idx) => {
                          const {
                            component: Component,
                            tag,
                            ...props
                          } = element; // Extract component and props

                          if (Array.isArray(element.component)) {
                            return element.component.map(
                              (ArrComponent, idxs) => {
                                const arrTag = `${tag}-${idxs}`;
                                return (
                                  <div key={idxs} className="py-1">
                                    <ArrComponent
                                      {...props}
                                      handleChange={(value) =>
                                        dispatch(
                                          section.dispatch({
                                            tag: arrTag,
                                            value,
                                          })
                                        )
                                      }
                                    />
                                  </div>
                                );
                              }
                            );
                          } else {
                            return (
                              <div key={idx} className="py-1">
                                <Component
                                  {...props}
                                  handleChange={(value) =>
                                    dispatch(section.dispatch({ tag, value }))
                                  }
                                />
                              </div>
                            );
                          }
                        })}
                      </div>
                    </details>
                  ))}
                  {/* <details className="bg-gray-700 rounded-md px-4 py-2 text-gray-100 hover:bg-gray-600">
                    <summary className="cursor-pointer">View All</summary>

                    <div className="mt-2">
                      {tailwindClass.elements.map((element, idx) => {
                        const { component: Component, tag, ...props } = element; // Extract component and props
                        return (
                          <div key={idx} className="py-1">
                            <Component
                              {...props}
                              handleChange={(value) => dispatch(setTypography({tag, value}))}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </details> */}
                </div>
              ))}

              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

              <details className="bg-gray-700 rounded-md px-4 py-2 text-gray-100 hover:bg-gray-600">
                <summary className="flex justify-between items-center cursor-pointer">
                  <span>Components</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                {components.map((component, idx) => (
                  <div key={idx} className="mt-2 capitalize">
                    <Link
                      to={component.path}
                      className="block text-blue-400 mb-2 hover:underline"
                      onClick={(e) => e.stopPropagation()} // Prevent dropdown toggle
                    >
                      {component.title}
                    </Link>
                  </div>
                ))}
              </details>
            </nav>
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <input
                className="mx-4 w-full border rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center pr-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
