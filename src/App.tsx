import { BrowserRouter } from "react-router-dom";
import RouteRenderer from "./route/route_rendere";

const App = () => {
  return (
    <BrowserRouter>
      <RouteRenderer />
    </BrowserRouter>
  );
};

export default App;
