import { FC } from 'react';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useFormik } from 'formik';
import { CITY_INITIAL_VALUES } from '../../../../../../utils/validations/cityValidations';

interface CityFormProps {
  onClose: () => void;
}

const CityForm: FC<CityFormProps> = ({ onClose }) => {
  const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
    initialValues: CITY_INITIAL_VALUES,
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
            label="Nombre de la Ciudad"
            name="name"
            rules={[{ required: true, message: 'Please input the city!' }]}
            style={{ marginBottom: '.5em' }}
          >
            <Input type="text" onChange={handleChange} value={values.name} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="País"
            name="country_id"
            style={{ marginBottom: '.5em' }}
            rules={[{ required: true, message: 'Please input the country!' }]}
          >
            <Select
              onChange={(value) => {
                setFieldValue('country_id', value)
              }}
              options={[
                { value: 1, label: 'Venezuela' },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit" block style={{ marginTop: '1rem' }}>
        Guardar
      </Button>
    </Form>
  );
}

export default CityForm;