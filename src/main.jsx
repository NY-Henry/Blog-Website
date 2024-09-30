import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import App from "./App.jsx";
import "./index.css";
import CreateBlog from "./pages/CreateBlog.jsx";
import Error from "./pages/Error.jsx";
import Blogdetails from "./pages/Blogdetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/create",
    element: <CreateBlog />,
  },
  {
    path: "/blogs/:id",
    element: <Blogdetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </StrictMode>,
);
