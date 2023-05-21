import { FC, useState } from 'react';
import { Typography, Space, Table, Tag, Button, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { User } from '../../../../../configs/interfaces';
import { users } from '../../../../../apis/data/userData';
import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons';
import UserForm from './components/UserForm';

const { Title, Text } = Typography;

const columns: ColumnsType<User> = [
  {
    title: 'Fullname',
    // dataIndex: 'full_name',
    key: 'full_name',
    render: (user: User) => <span>{`${user.person?.first_name} ${user.person?.last_name}`}</span>,
  },
  {
    title: 'Document',
    // dataIndex: 'address',
    key: 'document',
    render: (user: User) => <span>{user.person.document_id}</span>,
  },
  {
    title: 'E-mail',
    // dataIndex: 'email',
    key: 'email',
    render: (user: User) => <span>{user.email}</span>,

  },
  {
    title: 'Phone',
    // dataIndex: 'address',
    key: 'phone',
    render: (user: User) => <span>{user.person.phone}</span>,
  },
  {
    title: 'Type',
    key: 'type',
    // dataIndex: 'id',
    render: (user: User) => (
      <Tag color={user.person.type.id === 1 ? 'green' : 'geekblue'} key={user.person.type.id}>
        {user.person.type.name}
      </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (user: User) => (
      <>
        <Button type="primary" shape="circle" icon={<EditOutlined />} style={{ marginRight: '.5rem' }} />
        <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} style={{ marginRight: '.5rem' }} />
      </>
    ),
  },
];


const UsersPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  console.log(users)
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2}>Users</Title>
        <Button type="primary" shape="circle" icon={<FormOutlined />} onClick={handleOpen} />
        <Modal title="Create new User" open={isOpen} footer={null} onCancel={handleOpen}>
          <UserForm onClose={handleOpen} />
        </Modal>
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum suscipit inventore laboriosam accusamus numquam quasi, modi voluptatum consectetur dolorem!</Text>
      <Table columns={columns} dataSource={users} />
    </Space>
  );
}

export default UsersPage;