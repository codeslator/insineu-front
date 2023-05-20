import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./urls";
import { HomePage, SignInPage, StudentsPage, TeachersPage, UsersPage } from "../views/pages";
import { AppLayout, AuthLayout } from "../views/layouts";

export const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    element: <AuthLayout />,
    children: [
      {
        path: PATHS.ROOT,
        element: <SignInPage />
      }
    ]
  },
  {
    path: PATHS.ROOT,
    element: <AppLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <HomePage />
      },
      {
        path: PATHS.USERS,
        element: <UsersPage />
      },
      {
        path: PATHS.STUDENTS,
        element: <StudentsPage />
      },
      {
        path: PATHS.TEACHERS,
        element: <TeachersPage />
      },
      {
        path: PATHS.PERMISSIONS,
        element: <HomePage />
      },
      {
        path: PATHS.ROLES,
        element: <HomePage />
      },
    ]
  },
]);