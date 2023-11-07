import React from "react";
import { Button, Flex, Input, Modal, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getUser, deleteUsers } from "../Apis/UserApi";
import {
  ExclamationCircleOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import AddUser from "./UserModal";
import UserModal from "./UserModal";
import { useDispatch } from "react-redux";
import useUserList from "../hooks/useUserList";

interface DataType {
  id: number;
  username: string;
  password: string;
  role: string;
  email: string;
}
// id name , user name pass

const UserList: React.FC = () => {
  const [data, setData] = React.useState([]);
  const { confirm } = Modal;

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            href="/"
            onClick={(event: any) => {
              event.preventDefault();
              distPatch({
                type: "update",
                payload: {
                  isOpen: true,
                  initValue: {
                    id: record.id,
                    username: record.username,
                    password: record.password,
                    role: record.role,
                    email: record.email,
                  },
                },
              });
            }}
          >
            edit
          </a>
          <a
            href="/"
            onClick={(event: any) => {
              event.preventDefault();
              confirm({
                title: "confirm",
                icon: <ExclamationCircleOutlined />,
                content: "Are you sure?",
                okText: "oke",
                cancelText: "cancel",
                onOk: async () => {
                  await deleteUsers(record.id);
                  await getData();
                },
              });
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  const [search, setSearch] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const getData = async (pageNumber: number = 0) => {
    const { data, total } = await getUser({
      params: {
        page: pageNumber,
        size: 2,
        username: search,
      },
    });
    setData(data);
    setTotal(total);
  };
  React.useEffect(() => {
    getData();
  }, []);
  const handleChangePage = async (pageNumber: number) => {
    await getData(pageNumber - 1);
  };
  const handleSearch = async () => {
    await getData();
  };
  // const [data, getData]: any = useUserList();
  const distPatch = useDispatch();
  const showModal = () => {
    distPatch({
      type: "create",
      payload: {
        isOpen: true,
        initValue: {},
      },
    });
  };

  return (
    <>
      <UserModal getData={getData} />
      <Flex justify="flex-end" style={{ marginBottom: 20 }}>
        <Input
          style={{ width: 300 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
        <Button
          icon={<SearchOutlined />}
          style={{
            backgroundColor: "gray",
            marginRight: 20,
          }}
          onClick={handleSearch}
        ></Button>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={showModal}
        >
          ADD
        </Button>
        {/* <AddUser isOpen={isModalOpen} onClose={() => setModalOpen(false)}></AddUser> */}
      </Flex>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        pagination={{
          pageSize: 2,
          total: total,
          onChange: handleChangePage,
        }}
      />
    </>
  );
};
export default UserList;
