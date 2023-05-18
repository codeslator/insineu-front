import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./urls";
import { SignInPage } from "../views/pages";
import { AuthLayout } from "../views/layouts";

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
]);