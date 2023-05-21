import { CSSProperties, FC } from 'react'
import { Col, Row } from "antd";
import LoginForm from './components/LoginForm';

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