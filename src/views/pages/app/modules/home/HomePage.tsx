import { FC } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const HomePage: FC = () => {
  return (
    <Row gutter={16}>
      <Col xs={24} md={12} lg={6} style={{ marginBottom: '1rem' }}>
        <Card bordered={false}>
          <Statistic
            title="Nuevos Estudiantes"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col xs={24} md={12} lg={6} style={{ marginBottom: '1rem' }}>
        <Card bordered={false}>
          <Statistic
            title="Nuevos Profesores"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  );
}

export default HomePage;