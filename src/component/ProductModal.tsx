import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Radio, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, getUser, updateUsers } from "../Apis/UserApi";
import { getType } from "../Apis/TypeApi";
import { addProduct } from "../Apis/Product";
interface ProductModalProps {
  getData: () => void;
}
interface typeList {
  id: number;
  typename: string;
}
const ProductModal = ({ getData }: ProductModalProps) => {
  //{getData} = props
  const [form] = Form.useForm();
  const isOpen = useSelector((state: any) => state.product.isOpen);
  const initialValues = useSelector((state: any) => state.user.initValue);
  const distPatch = useDispatch();
  const [option, setOption] = React.useState([]);
  const getOption = async () => {
    const optionlist = await getType();
    setOption(optionlist.data.content);
  };
  React.useEffect(() => {
    getOption();
  }, []);
  const mapData2Option = option.map((e) => ({}));

  useEffect(() => form.resetFields(), [initialValues]);
  return (
    <Modal
      forceRender
      open={isOpen}
      title={initialValues.id ? "Update Product" : "Create Product"}
      okText={initialValues.id ? "update" : "create"}
      cancelText="cancel"
      onCancel={() => {
        form.resetFields();
        distPatch({ type: "close" });
      }}
      onOk={() => {
        form
          .validateFields()
          .then(async (values) => {
            //update or insert

            initialValues.id
              ? await updateUsers(initialValues.id, values)
              : await addProduct(values.type_id, values);
            console.log(values);

            await getData();
            form.resetFields();
            distPatch({ type: "close" });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={initialValues}
      >
        <Form.Item
          name="productname"
          label="productname"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="image" label="image">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="type_id" label="type_id">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="price" label="price">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductModal;
