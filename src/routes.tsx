import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./error-page";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import About from "./pages/about";
import Contact from "./pages/contact";
import { AuthLayout, DashboardLayout } from "./layouts";
import Courses from "./pages/course";
import CourseDetail from "./pages/course/details";
import JobListings from "./pages/job";
import JobDetails from "./pages/job/details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/courses",
    element: <Courses />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/courses/:courseId",
    element: <CourseDetail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobs",
    element: <JobListings />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobs/:jobId",
    element: <JobDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [],
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
