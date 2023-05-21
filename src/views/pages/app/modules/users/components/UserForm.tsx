import { FC } from 'react';
import { Button, Col, Form, Input, Row, DatePicker, Select } from 'antd';
import { useFormik } from 'formik';
import { USER_INITIAL_VALUES } from '../../../../../../utils/validations/usersValidations';

interface UserFormProps {
  onClose: () => void;
}

const UserForm: FC<UserFormProps> = ({ onClose }) => {
  const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
    initialValues: USER_INITIAL_VALUES,
    // validationSchema: LOGIN_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log(values)
      onClose()
    }
  });

  return (
    <Form onFinish={handleSubmit} layout="vertical" autoComplete="off">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[{ required: true, message: 'Please input your firstname!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="first_name" onChange={handleChange} value={values.first_name} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[{ required: true, message: 'Please input your last name!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="last_name" onChange={handleChange} value={values.last_name} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Please input your e-mail!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="email" onChange={handleChange} value={values.email} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input.Password onChange={handleChange} value={values.password} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Document ID"
            name="document_id"
            rules={[{ required: true, message: 'Please input your document!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="document_id" onChange={handleChange} value={values.document_id} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="phone" onChange={handleChange} value={values.phone} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Birth Date"
            name="birth_date"
            rules={[{ required: true, message: 'Please input your birth date!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <DatePicker name="birth_date" onChange={(value) => setFieldValue('birth_date', value)} style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Person Type"
            name="type_id"
            style={{ marginBottom: '.5em' }}
            rules={[{ required: true, message: 'Please input your type!' }]}
          >
            <Select
              onChange={(value) => {
                setFieldValue('type_id', value)
              }}
              options={[
                { value: 1, label: 'Teacher' },
                { value: 2, label: 'Student' },
                { value: 3, label: 'Admin' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Role"
            name="role_id"
            style={{ marginBottom: '.5em' }}
            rules={[{ required: true, message: 'Please input your role!' }]}
          >
            <Select
              onChange={(value) => {
                setFieldValue('role_id', value)
              }}
              options={[
                { value: 1, label: 'Admin' },
                { value: 2, label: 'Superadmin' },
                { value: 3, label: 'Default' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="City"
            name="city_id"
            style={{ marginBottom: '.5em' }}
            rules={[{ required: true, message: 'Please input your role!' }]}
          >
            <Select
              onChange={(value) => {
                setFieldValue('city_id', value)
              }}
              options={[
                { value: 1, label: 'Barquisimeto' },
                { value: 2, label: 'San Diego' },
                { value: 3, label: 'San Felipe' },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit" block style={{ marginTop: '1rem' }}>
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;