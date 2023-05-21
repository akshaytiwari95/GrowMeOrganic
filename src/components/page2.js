import axios from 'axios';
import { useEffect, useState } from 'react';
import Department from './department';

import Table from './Table';

function Page() {
  const [data, setData] = useState([]); // state for passing row data to the table
  console.log(data);
  const rows = data.map(row => {
    return {
      id: row.id,
      userId: row.userId,

      title: row.title,
      body: row.body,
    };
  });
  console.log(rows);
  const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'userId', headerName: 'userId', width: 150 },

    {
      field: 'title',
      headerName: 'title',
      width: 150,
    },
    { field: 'body', headerName: 'body', width: 150 },
  ];
  useEffect(async () => {
    const content = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(content.data);
    setData(content.data);
  }, []);

  return (
    <div>
      <Table rows={rows} columns={columns} />
      <Department />
    </div>
  );
}
export default Page;
// {/* <DataGrid rows={rows} columns={columns}  */}
