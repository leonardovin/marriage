import { crc16 } from "crc";

/**
 *
 */
export default function generatePixQrCode(pixKey, amount, merchantName, merchantCity) {
  const payloadFormatIndicator = '000201';
  const pointOfInitiationMethod = '010211';
  const merchantAccountInformation = `26${('00' + pixKey.length).slice(-2)}0014BR.GOV.BCB.PIX01${pixKey.length}${pixKey}`;
  const merchantCategoryCode = '52040000';
  const transactionCurrency = '5303986';
  const transactionAmount = amount ? `54${('00' + amount.length).slice(-2)}${amount}` : '';
  const countryCode = '5802BR';
  const merchantNameField = `59${('00' + merchantName.length).slice(-2)}${merchantName}`;
  const merchantCityField = `60${('00' + merchantCity.length).slice(-2)}${merchantCity}`;
  const additionalDataField = '62070503***';  // Exemplo de campo adicional

  const payloadWithoutCRC = `${payloadFormatIndicator}${pointOfInitiationMethod}${merchantAccountInformation}${merchantCategoryCode}${transactionCurrency}${transactionAmount}${countryCode}${merchantNameField}${merchantCityField}${additionalDataField}6304`;

  // Calcular o CRC16
  const crc = crc16(payloadWithoutCRC).toString(16).toUpperCase().padStart(4, '0');

  // Adicionar o CRC16 ao final do payload
  return `${payloadWithoutCRC}${crc}`;
}


