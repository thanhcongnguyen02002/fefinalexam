import axiosClient from ".";
import { AxiosRequestConfig } from "axios";

const getUser = async (config?: AxiosRequestConfig) => {
  const respone = await axiosClient.get("user", config);
  const data = respone.data.content;
  const total = respone.data.totalElements;

  return { data, total };
};

const deleteUsers = (id: number) => {
  return axiosClient.delete(`user/${id}`); //delete localhost:8080/api/v1/users/1
};
const addUsers = (payload: {
  username: string;
  password: string;
  email: string;
  role: string;
}) => {
  return axiosClient.post("user/create", payload);
};
const updateUsers = (
  id: number,
  payload: {
    username: string;
    password: string;
    email: string;
    role: string;
  }
) => {
  return axiosClient.patch(`user/update/${id}`, payload);
};
export { getUser, deleteUsers, addUsers, updateUsers };
