import { CSSProperties, FC } from 'react'
import { Space, Col, Row } from "antd";
import LoginForm from './components/LoginForm';
import { Content } from 'antd/es/layout/layout';

const spaceStyles: CSSProperties = {
  width: '100%'
};

const SignInPage: FC = () => {
  return (
    <section style={spaceStyles}>
      <Row justify="center">
        <Col sm={20} md={16} lg={12} xl={9} xxl={6}>
          <LoginForm />
        </Col>
      </Row>
    </section>

  );
}

export default SignInPage;