import { FC, useState } from 'react'
import { Typography, Space, Table, Button, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MENU_LABELS } from '../../../../../configs/urls';
import { Question } from '../../../../../configs/interfaces';
import { questions } from '../../../../../apis/data/questionData';
import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons';
import QuestionForm from './components/QuestionForm';

const { Title, Text } = Typography;

const columns: ColumnsType<Question> = [
  {
    title: 'Texto de la Pregunta',
    key: 'text',
    render: (question: Question) => <span>{question.text}</span>,
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (question: Question) => (
      <>
        <Button type="primary" shape="circle" icon={<EditOutlined />} style={{ marginRight: '.5rem' }} />
        <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} style={{ marginRight: '.5rem' }} />
      </>
    ),
  },
];

const QuestionsPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2}>Módulo de {MENU_LABELS.QUESTIONS}</Title>
        <Button type="primary" shape="circle" icon={<FormOutlined />} onClick={handleOpen} />
        <Modal title="Crear nueva Pregunta" open={isOpen} footer={null} onCancel={handleOpen}>
          <QuestionForm onClose={handleOpen} />
        </Modal>
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum suscipit inventore laboriosam accusamus numquam quasi, modi voluptatum consectetur dolorem!</Text>
      <Table columns={columns} dataSource={questions} scroll={{ x: 500 }} />
    </Space>
  );
}

export default QuestionsPage;