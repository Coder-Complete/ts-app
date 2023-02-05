import "./style.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./routes/root/App";
import Course from "./routes/course/Course";
import ErrorPage from "./routes/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Course />,
    // element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "course",
    element: <Course />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/course" element={<Course />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
