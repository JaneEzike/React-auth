// import axios from "axios";
// import { BASE_URL } from "../../api";

// export const SignData = async (userData: any) => {
//   const response = await axios.get(`${BASE_URL}/todos`, userData);
//   return response;
// };
// export const login = async (credentials: any) => {
//   const response = await axios.post(`${BASE_URL}/todos`, credentials);
//   return response.data;
// };
// export const logout = async () => {
//   // Perform any necessary cleanup (e.g., clearing tokens, etc.)
//   // No need for a mutation as it's a simple action without an API call
// };
import axios from "axios";
import { LoginInput } from "../pages/login.page";
import { RegisterInput } from "../pages/register.page";
import { GenericResponse, ILoginResponse, IUserResponse } from "../types";
import { authApi } from "@/services/api";

export const signUpUserFn = async (user: RegisterInput) => {
  const response = await authApi.post<GenericResponse>("auth/register", user);
  return response.data;
};

export const loginUserFn = async (user: LoginInput) => {
  const response = await authApi.post<ILoginResponse>("auth/login", user);
  return response.data;
};

export const verifyEmailFn = async (verificationCode: string) => {
  const response = await authApi.get<GenericResponse>(
    `auth/verifyemail/${verificationCode}`
  );
  return response.data;
  
};

export const logoutUserFn = async () => {
  const response = await authApi.get<GenericResponse>("auth/logout");
  return response.data;
};

export const getMeFn = async () => {
  const response = await authApi.get<IUserResponse>("users/me");
  return response.data;
};





// Export your authentication functions
export const useLogin = () => useMutation(login);
export const useLogout = () => useMutation(logout);
export const useAuth = () => useQuery('user', fetchUser); 