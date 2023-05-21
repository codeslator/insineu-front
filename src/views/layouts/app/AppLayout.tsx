import { CSSProperties, FC, useState } from 'react';
import {
  BookOutlined,
  CarryOutOutlined,
  ContactsOutlined,
  ContainerOutlined,
  FileDoneOutlined,
  GlobalOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProjectOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
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
    key: PATHS.ENROLLMENTS,
    icon: <ProjectOutlined />,
    label: <Link to={ROUTES.ENROLLMENTS}>{MENU_LABELS.ENROLLMENTS}</Link>,
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
  {
    key: PATHS.COURSES,
    icon: <CarryOutOutlined />,
    label: <Link to={ROUTES.COURSES}>{MENU_LABELS.COURSES}</Link>,
  },
  {
    key: PATHS.QUESTIONS,
    icon: <FileDoneOutlined />,
    label: <Link to={ROUTES.QUESTIONS}>{MENU_LABELS.QUESTIONS}</Link>,
  },
  {
    key: PATHS.ANSWERS,
    icon: <ContainerOutlined />,
    label: <Link to={ROUTES.ANSWERS}>{MENU_LABELS.ANSWERS}</Link>,
  },
  {
    key: PATHS.CITIES,
    icon: <GlobalOutlined />,
    label: <Link to={ROUTES.CITIES}>{MENU_LABELS.CITIES}</Link>,
  },
]

const AppLayout: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const navigate = useNavigate();
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
        <Header style={{ padding: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
          <Button
            type="text"
            icon={<LogoutOutlined />}
            onClick={() => navigate(PATHS.ROOT)}
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