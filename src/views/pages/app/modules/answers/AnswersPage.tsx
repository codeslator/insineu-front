import { FC } from 'react';
import { Typography, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MENU_LABELS } from '../../../../../configs/urls';
import { Answer } from '../../../../../configs/interfaces';
import { answers } from '../../../../../apis/data/answerData';

const { Title, Text } = Typography;

const columns: ColumnsType<Answer> = [
  {
    title: 'Pregunta',
    key: 'full_name',
    render: (answer: Answer) => <span>{answer.question.text}</span>,
  },
  {
    title: 'Respuesta',
    key: 'answer',
    render: (answer: Answer) => <span>{`${answer.text}`}</span>,
  },
  {
    title: 'Curso',
    key: 'document',
    render: (answer: Answer) => <span>{answer.enrollment.course.name}</span>,
  },
];

const AnswersPage: FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2}>Módulo de {MENU_LABELS.ANSWERS}</Title>
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum suscipit inventore laboriosam accusamus numquam quasi, modi voluptatum consectetur dolorem!</Text>
      <Table columns={columns} dataSource={answers} scroll={{ x: 500 }} />
    </Space>
  );
}

export default AnswersPage;