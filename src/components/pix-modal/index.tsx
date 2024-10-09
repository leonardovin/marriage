// components/PixModal.js

import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Image, Center, Heading, Button, Text } from "@chakra-ui/react";
import generatePixQrCode from "../../utils/payment";
import QRCode from "qrcode.react";
import copyToClipboard from "../../utils/copyToClipboard";

const pixKey = process.env.NEXT_PUBLIC_PIX_KEY || '';
const pixReceiverName = process.env.NEXT_PUBLIC_PIX_NAME || '';
const pixLocation = process.env.NEXT_PUBLIC_PIX_LOCATION || '';


interface IPixModalProps {
  isOpen: boolean,
  onClose: () => void,
  imageUrl: string,
  title: string,
  value: number
}


const PixModal: React.FC<IPixModalProps> = ({ isOpen, onClose, imageUrl, title, value }) => {
  const pixQrCode = generatePixQrCode(pixKey, value, pixReceiverName, pixLocation);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Center mb={4}>
            <Image src={imageUrl} alt={title} maxWidth="100%" />
          </Center>
          <Center mb={4} flexDirection="column" alignItems="center" gap={5}>
            <Heading size="md" mb={2}>
              Presenteie com PIX
            </Heading>
            <Text >Valor: R$ {value}</Text>
            <Text >Nome do Recebedor: {pixReceiverName}</Text>
            <QRCode value={pixQrCode} size={200} />
            <Button bgColor=" #93C572" color={"brand.brown"} onClick={() => copyToClipboard(pixQrCode)}>
              Copiar Código PIX
            </Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal >
  );
};

export default PixModal;
