import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3333',
});

const uploadTransactionsFile = (file: File) => {
  const formData = new FormData();

  formData.append('file', file);

  return client.post('/upload/transactions', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const api = {
  uploadTransactionsFile,
};

export default api;
