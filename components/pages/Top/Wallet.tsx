'use client';

import {Button, Image} from '@chakra-ui/react';
import {useCallback, useEffect, useState} from 'react';
import {connect} from '../../../utils/WalletUtils';
import QRCode from 'qrcode';

export const Wallet: React.FC = () => {
  const [qr, setQR] = useState('');
  const [address, setAddress] = useState('');

  const handleConnect = useCallback(async () => {
    const signer = await connect();
    setAddress(await signer.getAddress());
  }, []);

  useEffect(() => {
    if (address === '') return;

    QRCode.toDataURL(address).then(setQR);
  }, [address]);

  if (address === '') {
    return (
      <Button bg="white" color="gray.900" onClick={handleConnect}>
        Connect Wallet
      </Button>
    );
  }

  return <Image src={qr} alt={address} />;
};
