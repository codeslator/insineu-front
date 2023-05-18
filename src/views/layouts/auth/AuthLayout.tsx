import { FC, CSSProperties } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const contentStyle: CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
};

const AuthLayout: FC = () => {
  return (
    <Layout>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AuthLayout;