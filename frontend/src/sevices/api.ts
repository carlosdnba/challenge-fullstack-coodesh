import axios from 'axios';
import { ITransaction } from '../types/transaction';

const client = axios.create({
  baseURL: 'http://localhost:3333',
});

const uploadTransactionsFile = async (file: File) => {
  const formData = new FormData();

  formData.append('file', file);

  const { data } = await client.post('/upload/transactions', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data as { transactions: ITransaction[] };
};

const api = {
  uploadTransactionsFile,
};

export default api;
