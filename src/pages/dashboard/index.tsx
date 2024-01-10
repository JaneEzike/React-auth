import { useQuery } from "react-query";
import axios from "axios";
import { getToken } from "./tokenService"; // Import your token storage functions

const fetchUserData = async () => {
  const token = getToken();
  const response = await axios.get("/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const Dashboard = () => {
  const { isLoading, isError, data, error } = useQuery(
    "userData",
    fetchUserData
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <h1>Hello, {data.username}</h1>;
};
