import React from "react";
import { Button, Flex, Modal, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { deleteProduct, getProduct } from "../Apis/Product";
import {
  ExclamationCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import ProductModal from "./ProductModal";

interface DataType {
  id: number;
  productname: string;
  description: string;
  image: string;
  type_id: number;
  price: number;
}

const ProductList: React.FC = () => {
  const [data, setData] = React.useState([]);
  const { confirm } = Modal;
  const columns: ColumnsType<DataType> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "ProductName",
      dataIndex: "productname",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "image",
      dataIndex: "image",
      key: "image",
      render: (url) => (
        <img src={url} alt="" style={{ width: 307, height: 164 }} />
      ),
    },
    {
      title: "type name",
      dataIndex: "type_id",
      key: "type_id",
      render: (_, record: any) => <p>{record.type.name}</p>,
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
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
                    description: record.description,
                    image: record.image,
                    price: record.price,
                    productname: record.productname,
                    type_id: record.type_id,
                  },
                },
              });
            }}
          >
            Update
          </a>
          <a
            href="/"
            onClick={(event: any) => {
              event.preventDefault();
              console.log(record);
              confirm({
                title: "confirm",
                icon: <ExclamationCircleOutlined />,
                content: "Are you sure?",
                okText: "oke",
                cancelText: "cancel",
                onOk: async () => {
                  await deleteProduct(record.id);
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
  const getData = async () => {
    const productList = await getProduct();
    setData(productList.data.content);
  };
  React.useEffect(() => {
    getData();
  }, []);
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
      <ProductModal getData={getData} />
      <Flex justify="flex-end" style={{ marginBottom: 20 }}>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={showModal}
        >
          ADD
        </Button>
        {/* <AddUser isOpen={isModalOpen} onClose={() => setModalOpen(false)}></AddUser> */}
      </Flex>
      <Table columns={columns} dataSource={data} rowKey={"id"} />;
    </>
  );
};

export default ProductList;
