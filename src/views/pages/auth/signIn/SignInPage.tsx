import { CSSProperties, FC } from 'react'
import { Space } from "antd";
import LoginForm from './components/LoginForm';

const spaceStyles: CSSProperties = {
  width: '35%'
};

const SignInPage: FC = () => {
  return (
    <Space direction="vertical" size="middle" style={spaceStyles}>
      <LoginForm />
    </Space>
  );
}

export default SignInPage;