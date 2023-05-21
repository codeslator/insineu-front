import { FC } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import { useFormik } from 'formik';
import { QUESTION_INITIAL_VALUES } from '../../../../../../utils/validations/questionValidations';

interface QuestionFormProps {
  onClose: () => void;
}

const QuestionForm: FC<QuestionFormProps> = ({ onClose }) => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: QUESTION_INITIAL_VALUES,
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
            label="Texto de la Pregunta"
            name="text"
            rules={[{ required: true, message: 'Please input the question!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="text" onChange={handleChange} value={values.text} />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit" block style={{ marginTop: '1rem' }}>
        Guardar
      </Button>
    </Form>
  );
}

export default QuestionForm;