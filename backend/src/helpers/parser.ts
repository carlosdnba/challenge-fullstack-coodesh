import { v4 as uuid } from 'uuid';

export const transactionsFileIntoList = (file: string) => {
  // Filtering out empty lines
  const lines = file
  .split('\n')
  .filter(line => line.length > 0);

  // Going through each line and building a transaction object
  const transactions = lines
    .map((line) => {
      // Building transaction object based on the file format (see README.md)
      const type = line.slice(0, 1);
      const date = line.slice(1, 26);
      const product = line.slice(26, 56).trim();
      const value = line.slice(56, 66);
      const salesPerson = line.slice(66, 86);

      const transaction = {
        id: uuid(),
        type: Number(type),
        date,
        product,
        value: Number(value)/100, // Converting to cents
        salesPerson,
      }

      return transaction;
    });


  return transactions;
};

export default {
  transactionsFileIntoList,
};
