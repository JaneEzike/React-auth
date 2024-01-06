import Login from "@/pages/auth/login";
import SignUp from "@/pages/auth/signup";
import Dashbaord from "@/pages/dashboard";

interface Route {
  path: string;
  element: any;
}

const RouteConfig: Route[] = [
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashbaord />,
  },
];

export default RouteConfig;
