import { CSSProperties, FC, useState } from 'react';
import {
  BookOutlined,
  ContactsOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Row } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { MENU_LABELS, PATHS, ROUTES } from '../../../configs/urls';

const { Header, Sider, Content } = Layout;


const contentStyle: CSSProperties = {
  minHeight: '100vh',
  width: '100%'
};

const items = [
  {
    key: PATHS.HOME,
    icon: <HomeOutlined />,
    label: <Link to={ROUTES.HOME}>{MENU_LABELS.HOME}</Link>,
  },
  {
    key: PATHS.USERS,
    icon: <UsergroupAddOutlined />,
    label: <Link to={ROUTES.USERS}>{MENU_LABELS.USERS}</Link>,
  },
  {
    key: PATHS.STUDENTS,
    icon: <ContactsOutlined />,
    label: <Link to={ROUTES.STUDENTS}>{MENU_LABELS.STUDENTS}</Link>,
  },
  {
    key: PATHS.TEACHERS,
    icon: <BookOutlined />,
    label: <Link to={ROUTES.TEACHERS}>{MENU_LABELS.TEACHERS}</Link>,
  },
]

const AppLayout: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <Layout style={contentStyle}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            fontSize: '20px',
            width: '100%',
            height: 64,
            color: '#fff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          INSINEU APP
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[PATHS.HOME]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '20px',
              width: 64,
              height: 64,
              color: '#fff'
            }}
          />
        </Header>
        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;