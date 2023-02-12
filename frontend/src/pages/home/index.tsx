import React from 'react';

import api from '../../sevices/api';

function Home() {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) {
      setFile(file);
    }
  };

  const handleUpload = async () => {
    if (!file) window.alert('File not selected!')

    await api.uploadTransactionsFile(file!);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <input type='file' onChange={handleFileLoad} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Home
