import { FC } from 'react'
import { Card, Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { LOGIN_INITIAL_VALUES, LOGIN_VALIDATION_SCHEMA } from '../../../../../utils/validations/authValidations';
import { useNavigate } from 'react-router-dom';

const LoginForm: FC = () => {
  const navigate = useNavigate()
  const { handleSubmit, handleChange, values, } = useFormik({
    initialValues: LOGIN_INITIAL_VALUES,
    validationSchema: LOGIN_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log(values)
      navigate('/home')
    }
  })

  return (
    <Card title="Iniciar Sesion" headStyle={{ textAlign: 'center' }}>
      <Form onFinish={handleSubmit} layout="vertical" autoComplete="off">
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input type="email" onChange={handleChange} value={values.email} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password onChange={handleChange} value={values.password} />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form>

    </Card>
  );
}

export default LoginForm;