import { FC, useState } from 'react'
import { User } from '../../../../../../configs/interfaces'
import { QrcodeOutlined } from '@ant-design/icons';
import { Button, Modal, QRCode } from 'antd';

interface QrModalProps {
  user: User;
}

const QrModal: FC<QrModalProps> = ({ user }) => {
  const [isOpenQR, setIsOpenQR] = useState<boolean>(false);
  const [qrText] = useState<string>(`http://localhost:5173/${JSON.stringify(user)}`)
  
  const handleOpenQR = () => {
    setIsOpenQR(!isOpenQR);
  };

  return (
    <>
      <Button type="primary" size="small" icon={<QrcodeOutlined />} onClick={handleOpenQR}>
        Ver QR
      </Button>
      <Modal
        title={`QR del ${user.person?.type.name} - ${user.person?.first_name} ${user.person?.last_name}`}
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