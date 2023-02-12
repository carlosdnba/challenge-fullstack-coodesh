import React from 'react';

import api from '../../sevices/api';
import TransactionsTable from '../../components/TransactionsTable';
import { ITransaction } from '../../types/transaction';

function Home() {
  const [file, setFile] = React.useState<File | null>(null);
  const [transactions, setTransactions] = React.useState<ITransaction[]>([]);

  const handleFileLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) setFile(file);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) window.alert('File not selected!');

    const { transactions } = await api.uploadTransactionsFile(file!);
    setTransactions(transactions);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleUpload}>
        <input type='file' onChange={handleFileLoad} accept=".txt" />
        <button type='submit'>Upload</button>
      </form>
      <br />
      {transactions.length > 0 ? <TransactionsTable transactions={transactions} /> : <></>}
    </div>
  );
}

export default Home
