import axiosClient from ".";

const getProduct = () => {
  return axiosClient.get("product");
};

const deleteProduct = (id: number) => {
  return axiosClient.delete(`product/${id}`); //delete localhost:8080/api/v1/users/1
};
const addProduct = (
  id: number,
  payload: {
    productname: string;
    description: string;
    image: string;
    type_id: number;
    price: number;
  }
) => {
  return axiosClient.post(`/type/${id}/product`, payload);
};
const createProduct = (payload: {
  productname: string;
  description: string;
  image: string;
  type_id: number;
  price: number;
}) => {
  return axiosClient.post(`product/create`, payload);
};
const updateProduct = (
  id: number,
  payload: {
    productname: string;
    description: string;
    image: string;
    type_id: number;
    price: number;
  }
) => {
  return axiosClient.patch(`product/update/${id}`, payload);
};

export { getProduct, deleteProduct, addProduct, createProduct, updateProduct };
