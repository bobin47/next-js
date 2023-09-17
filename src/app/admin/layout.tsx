"use client";
import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useEffect, useState } from "react";
import type { MenuProps } from 'antd';

import { useRouter, usePathname } from "next/navigation";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items: MenuItem[] = [
    getItem("User", "user", <UserOutlined />),
    getItem("Tour", "tour", <DesktopOutlined />),
  ];

  const getPathName = (path: string) => {
    const arrPath = path.split("/");
    return arrPath[arrPath.length - 1];
  };

  const breadcrumbName = (inputArray: Array<any>) => {
    const outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
      const title = inputArray[i];
      outputArray.push({ title });
    }
    return outputArray;
  };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pathName = usePathname();
  const [current, setCurrent] = useState(getPathName(pathName));
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
  };

  return (
    <div>
      {" "}
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical">hihi</div>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            hihi
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb
              style={{ margin: "16px 0", textTransform: "capitalize" }}
              items={breadcrumbName(pathName.split("/"))}
            />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
