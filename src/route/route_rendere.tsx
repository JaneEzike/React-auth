import { useRoutes } from "react-router-dom";
import RouteConfig from "./route_config";

function RouteRenderer() {
  let element = useRoutes(RouteConfig);
  return element;
}
export default RouteRenderer;
