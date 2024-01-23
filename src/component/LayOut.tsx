import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const LayOut: React.FC = () => {
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: React.createElement(UserOutlined),
      label: `User management`,
      onClick: () => {
        navigate("/admin/user");
      },
      style: { marginTop: 50 },
    },
    {
      key: "2",
      icon: React.createElement(ShopOutlined),
      label: `Product management`,
      onClick: () => {
        navigate("/admin/product");
      },
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            borderBottom: "1px  black solid",
          }}
        >
          <Button
            type="primary"
            danger
            onClick={() => {
              navigate("/");
            }}
          >
            Log out{" "}
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Nguyen Thanh Cong</Footer>
      </Layout>
    </Layout>
  );
};

export default LayOut;
