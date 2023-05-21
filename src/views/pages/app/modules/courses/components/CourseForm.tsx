import { FC } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { useFormik } from 'formik';
import { COURSE_INITIAL_VALUES } from '../../../../../../utils/validations/coursesValidations';

interface CourseFormProps {
  onClose: () => void;
}

const CourseForm: FC<CourseFormProps> = ({ onClose }) => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: COURSE_INITIAL_VALUES,
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
            label="Nombre del Curso"
            name="name"
            rules={[{ required: true, message: 'Please input the course name!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="text" onChange={handleChange} value={values.name} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Código"
            name="code"
            rules={[{ required: true, message: 'Please input the course code!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="text" onChange={handleChange} value={values.code} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Descrpción"
            name="description"
            rules={[{ required: true, message: 'Please input your e-mail!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="text" onChange={handleChange} value={values.description} />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit" block style={{ marginTop: '1rem' }}>
        Guardar
      </Button>
    </Form>
  )
}

export default CourseForm