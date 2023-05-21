import { FC } from 'react';
import { Typography, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MENU_LABELS } from '../../../../../configs/urls';
import { TeacherDetail } from '../../../../../configs/interfaces';
import { teachers } from '../../../../../apis/data/teacherData';

const { Title, Text } = Typography;

const columns: ColumnsType<TeacherDetail> = [
  {
    title: 'Código',
    key: 'code',
    render: (teacher: TeacherDetail) => <span>{`${teacher.code}`}</span>,
  },
  {
    title: 'Nombre Completo',
    key: 'full_name',
    render: (teacher: TeacherDetail) => <span>{`${teacher.person.first_name} ${teacher.person.last_name}`}</span>,
  },
  {
    title: 'Documento de Identidad',
    key: 'document',
    render: (teacher: TeacherDetail) => <span>{teacher.person.document_id}</span>,
  },
  {
    title: 'E-mail',
    key: 'email',
    render: (teacher: TeacherDetail) => <span>{teacher.person.email}</span>,
  },
  {
    title: 'Teléfono',
    key: 'phone',
    render: (teacher: TeacherDetail) => <span>{teacher.person.phone}</span>,
  },
];

const TeachersPage: FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2}>Módulo de {MENU_LABELS.TEACHERS}</Title>
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum suscipit inventore laboriosam accusamus numquam quasi, modi voluptatum consectetur dolorem!</Text>
      <Table columns={columns} dataSource={teachers} scroll={{ x: 500 }} />
    </Space>
  );
}

export default TeachersPage;