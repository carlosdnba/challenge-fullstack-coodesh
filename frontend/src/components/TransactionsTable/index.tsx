import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ITransaction } from '../../types/transaction';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'type', headerName: 'Type', width: 130 },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    width: 90,
  },
  {
    field: 'product',
    headerName: 'Product',
    width: 90,
  },
  {
    field: 'salesPerson',
    headerName: 'Seller',
    width: 90,
  },
];

function TransactionsTable({ transactions }: { transactions: ITransaction[] }) {
  const rows = transactions;

  // Return a table with the transactions
  return (
    <div style={{ height: 720, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
      />
    </div>
  );
}

export default TransactionsTable;
