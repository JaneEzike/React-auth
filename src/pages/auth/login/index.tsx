import Cookies from "js-cookie";

import { useMutation } from "@tanstack/react-query";
const Login = () => {
  const loginMutation = useMutation(login);

  const handleLogin = async (credentials) => {
    try {
      const data = await loginMutation.mutateAsync(credentials);
      const { token } = response.data;

      // Store token in a cookie
      Cookies.set("token", token);
      // Handle successful login response (if needed)
    } catch (error) {
      // Handle login error
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
      // Handle successful logout (e.g., redirect to login page)
    } catch (error) {
      // Handle logout error
    }
  };

  return <div>Login</div>;
};

export default Login;
