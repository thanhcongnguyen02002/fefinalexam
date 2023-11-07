import axiosClient from ".";

const getType = () => {
  return axiosClient.get("type");
};

const deleteType = (id: number) => {
  return axiosClient.delete(`type/${id}`); //delete localhost:8080/api/v1/users/1
};
const addType = (payload: { name: string }) => {
  return axiosClient.post("type", payload);
};

export { getType, deleteType, addType };
