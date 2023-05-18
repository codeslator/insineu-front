import { FC } from 'react'
import { Card, Button, Form, Input } from 'antd';

const LoginForm: FC = () => {
  return (
    <Card title="Iniciar Sesion" headStyle={{ textAlign: 'center' }}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Submit
      </Button>
    </Card>
  );
}

export default LoginForm;