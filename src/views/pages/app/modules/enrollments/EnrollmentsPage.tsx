import { FC, useState } from 'react';
import { Typography, Space, Table, Button, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Enrollment } from '../../../../../configs/interfaces';
import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons';
import { MENU_LABELS } from '../../../../../configs/urls';
import { enrollments } from '../../../../../apis/data/enrollmentData';
import EnrollmentForm from './components/EnrollmentForm';

const { Title, Text } = Typography;

const columns: ColumnsType<Enrollment> = [
  {
    title: 'Curso',
    key: 'course',
    render: (enrollment: Enrollment) => <span>{`${enrollment.course.name}`}</span>,
  },
  {
    title: 'Estudiante',
    key: 'student',
    render: (enrollment: Enrollment) => <span>{`${enrollment.student.person?.first_name} ${enrollment.student.person?.last_name}`}</span>,
  },
  {
    title: 'Profesor',
    key: 'teacher',
    render: (enrollment: Enrollment) => <span>{`${enrollment.teacher.person?.first_name} ${enrollment.teacher.person?.last_name}`}</span>,

  },
  {
    title: 'Fecha de Inicio',
    key: 'start_date',
    render: (enrollment: Enrollment) => <span>{enrollment.start_date.toLocaleString('es-ES')}</span>,
  },
  {
    title: 'Fecha de Fin',
    key: 'end_date',
    render: (enrollment: Enrollment) => <span>{enrollment.end_date.toLocaleString('es-ES')}</span>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (enrollment: Enrollment) => (
      <>
        <Button type="primary" shape="circle" icon={<EditOutlined />} style={{ marginRight: '.5rem' }} />
        <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} style={{ marginRight: '.5rem' }} />
      </>
    ),
  },
];

const EnrollmentsPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2}>Módulo de {MENU_LABELS.ENROLLMENTS}</Title>
        <Button type="primary" shape="circle" icon={<FormOutlined />} onClick={handleOpen} />
        <Modal title="Create nueva Inscripción" open={isOpen} footer={null} onCancel={handleOpen}>
          <EnrollmentForm onClose={handleOpen} />
        </Modal>
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum suscipit inventore laboriosam accusamus numquam quasi, modi voluptatum consectetur dolorem!</Text>
      <Table columns={columns} dataSource={enrollments} scroll={{ x: 500 }} />
    </Space>
  );
}

export default EnrollmentsPage;