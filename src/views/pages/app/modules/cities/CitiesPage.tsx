import { FC, useState } from 'react';
import { Typography, Space, Table, Button, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MENU_LABELS } from '../../../../../configs/urls';
import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons';
import CityForm from './components/CityForm';
import { cities } from '../../../../../apis/data/cityData';
import { City } from '../../../../../configs/interfaces';

const { Title, Text } = Typography;

const columns: ColumnsType<City> = [
  {
    title: 'Nombre de la Ciudad',
    key: 'name',
    render: (city: City) => <span>{city.name}</span>,
  },
  {
    title: 'País',
    key: 'country',
    render: (city: City) => <span>{city.country.name}</span>,
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (city: City) => (
      <>
        <Button type="primary" shape="circle" icon={<EditOutlined />} style={{ marginRight: '.5rem' }} />
        <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} style={{ marginRight: '.5rem' }} />
      </>
    ),
  },
];

const CitiesPage: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2}>Módulo de {MENU_LABELS.CITIES}</Title>
        <Button type="primary" shape="circle" icon={<FormOutlined />} onClick={handleOpen} />
        <Modal title="Crear nueva Pregunta" open={isOpen} footer={null} onCancel={handleOpen}>
          <CityForm onClose={handleOpen} />
        </Modal>
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum suscipit inventore laboriosam accusamus numquam quasi, modi voluptatum consectetur dolorem!</Text>
      <Table columns={columns} dataSource={cities} scroll={{ x: 500 }} />
    </Space>
  );
}

export default CitiesPage;