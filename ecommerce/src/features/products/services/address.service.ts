import axios from 'axios';

import { AddressDocument } from '../models/Address';

const getAddresses = async () => {
  const response = await axios.get<AddressDocument[]>(
    `${process.env.REACT_APP_BASE_API}/address`
  );

  return response;
};

const addressService = {
  getAddresses,
};

export default addressService;
