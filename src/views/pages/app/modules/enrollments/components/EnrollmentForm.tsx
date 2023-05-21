import { FC } from 'react';
import { Button, Col, Form, Row, DatePicker, Select } from 'antd';
import { useFormik } from 'formik';
import { ENROLLMENT_INITIAL_VALUES } from '../../../../../../utils/validations/enrollmentsValidations';

interface EnrollmentFormProps {
  onClose: () => void;
}

const EnrollmentForm: FC<EnrollmentFormProps> = ({ onClose }) => {
  const { handleSubmit, setFieldValue } = useFormik({
    initialValues: ENROLLMENT_INITIAL_VALUES,
    // validationSchema: LOGIN_VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log(values)
      onClose()
    }
  });

  return (
    <Form onFinish={handleSubmit} layout="vertical" autoComplete="off">
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Curso"
            name="course_id"
            style={{ marginBottom: '.5em' }}
            rules={[{ required: true, message: 'Please input your type!' }]}
          >
            <Select
              onChange={(value) => {
                setFieldValue('course_id', value)
              }}
              options={[
                { value: 1, label: 'Neumocurso 1' },
                { value: 2, label: 'Neumocurso 2' },
                { value: 3, label: 'Neumocurso 3' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Estudiante"
            name="student_id"
            style={{ marginBottom: '.5em' }}
            rules={[{ required: true, message: 'Please input the student!' }]}
          >
            <Select
              onChange={(value) => {
                setFieldValue('student_id', value)
              }}
              options={[
                { value: 1, label: 'Enrique Salazar' },
                { value: 2, label: 'Juan Perez' },
                { value: 3, label: 'Maria Linarez' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Profesor"
            name="teacher_id"
            style={{ marginBottom: '.5em' }}
            rules={[{ required: true, message: 'Please input the teacher!' }]}
          >
            <Select
              onChange={(value) => {
                setFieldValue('teacher_id', value)
              }}
              options={[
                { value: 1, label: 'Rosa Melano' },
                { value: 2, label: 'Elba Ginon' },
                { value: 3, label: 'Elmer Cado' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Start Date"
            name="start_date"
            rules={[{ required: true, message: 'Please input the start date!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <DatePicker name="start_date" onChange={(value) => setFieldValue('start_date', value)} style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="End Date"
            name="end_date"
            rules={[{ required: true, message: 'Please input the end date!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <DatePicker name="birth_date" onChange={(value) => setFieldValue('birth_date', value)} style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit" block style={{ marginTop: '1rem' }}>
        Guardar
      </Button>
    </Form>
  );
}

export default EnrollmentForm;