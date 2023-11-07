import React from "react";
import { getUser } from "../Apis/UserApi";
const useUserList = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const userList = await getUser({});
    setData(userList.data);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return [data, getData];
};

export default useUserList;
