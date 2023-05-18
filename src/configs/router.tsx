import { Button } from "antd";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Button>Hello wordl</Button>,
  },
]);