import { FC, useState } from 'react';
import { Typography, Space, Table, Button, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MENU_LABELS } from '../../../../../configs/urls';
import { Course } from '../../../../../configs/interfaces';
import { courses } from '../../../../../apis/data/courseData';
import CourseForm from './components/CourseForm';
import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const columns: ColumnsType<Course> = [
  {
    title: 'Código',
    key: 'code',
    render: (course: Course) => <span>{`${course.code}`}</span>,
  },
  {
    title: 'Nombre',
    key: 'name',
    render: (course: Course) => <span>{course.name}</span>,
  },
  {
    title: 'Descripción',
    key: 'description',
    render: (course: Course) => <span>{course.description}</span>,
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (course: Course) => (
      <>
        <Button type="primary" shape="circle" icon={<EditOutlined />} style={{ marginRight: '.5rem' }} />
        <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} style={{ marginRight: '.5rem' }} />
      </>
    ),
  },
];

const CoursesPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2}>Módulo de {MENU_LABELS.COURSES}</Title>
        <Button type="primary" shape="circle" icon={<FormOutlined />} onClick={handleOpen} />
        <Modal title="Crear nuevo Curso" open={isOpen} footer={null} onCancel={handleOpen}>
          <CourseForm onClose={handleOpen} />
        </Modal>
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum suscipit inventore laboriosam accusamus numquam quasi, modi voluptatum consectetur dolorem!</Text>
      <Table columns={columns} dataSource={courses} />
    </Space>
  );
}

export default CoursesPage;