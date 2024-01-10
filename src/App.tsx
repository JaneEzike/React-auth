import { BrowserRouter } from "react-router-dom";
import RouteRenderer from "./route/route_rendere";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouteRenderer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
