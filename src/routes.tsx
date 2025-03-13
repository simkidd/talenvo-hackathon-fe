import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./error-page";
import Login from "./pages/auth/Login";
import AuthLayout from "./layouts";
import Signup from "./pages/auth/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
