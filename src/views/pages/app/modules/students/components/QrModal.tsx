import { FC, useState } from 'react'
import { StudentDetail } from '../../../../../../configs/interfaces'
import { QrcodeOutlined } from '@ant-design/icons';
import { Button, Modal, QRCode } from 'antd';

interface QrModalProps {
  student: StudentDetail;
}

const QrModal: FC<QrModalProps> = ({ student }) => {
  const [isOpenQR, setIsOpenQR] = useState<boolean>(false);
  const [qrText] = useState<string>(`http://localhost:5173/${JSON.stringify(student)}`)
  
  const handleOpenQR = () => {
    setIsOpenQR(!isOpenQR);
  };

  return (
    <>
      <Button type="primary" size="small" icon={<QrcodeOutlined />} onClick={handleOpenQR}>
        Ver QR
      </Button>
      <Modal
        title={`QR del ${student.person.type.name} - ${student.person.first_name} ${student.person.last_name}`}
        centered
        open={isOpenQR}
        footer={false}
        onCancel={handleOpenQR}
        width={300}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
        <QRCode value={qrText || '-'} style={{ width: '100%' }} />
        </div>
      </Modal>
    </>
  );
}

export default QrModal;