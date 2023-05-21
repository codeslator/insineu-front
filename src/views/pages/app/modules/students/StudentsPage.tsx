import { FC } from 'react';
import { Typography, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MENU_LABELS } from '../../../../../configs/urls';
import { students } from '../../../../../apis/data/studentData';
import { StudentDetail } from '../../../../../configs/interfaces';
import QrModal from './components/QrModal';

const { Title, Text } = Typography;

const columns: ColumnsType<StudentDetail> = [
  {
    title: 'Código',
    key: 'code',
    render: (student: StudentDetail) => <span>{`${student.code}`}</span>,
  },
  {
    title: 'Nombre Completo',
    key: 'full_name',
    render: (student: StudentDetail) => <span>{`${student.person.first_name} ${student.person.last_name}`}</span>,
  },
  {
    title: 'Documento de Identidad',
    key: 'document',
    render: (student: StudentDetail) => <span>{student.person.document_id}</span>,
  },
  {
    title: 'E-mail',
    key: 'email',
    render: (student: StudentDetail) => <span>{student.person.email}</span>,
  },
  {
    title: 'Teléfono',
    key: 'phone',
    render: (student: StudentDetail) => <span>{student.person.phone}</span>,
  },
  {
    title: 'Institución',
    key: 'institution',
    render: (student: StudentDetail) => <span>{student.institution.name}</span>,
  },
  {
    title: 'Código QR',
    key: 'qr_code',
    render: (student: StudentDetail) => (<QrModal student={student} />),
  },
];

const StudentsPage: FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2}>Módulo de {MENU_LABELS.STUDENTS}</Title>
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum suscipit inventore laboriosam accusamus numquam quasi, modi voluptatum consectetur dolorem!</Text>
      <Table columns={columns} dataSource={students} scroll={{ x: 500 }} />
    </Space>
  );
}

export default StudentsPage;