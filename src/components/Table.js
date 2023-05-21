import { DataGrid } from '@mui/x-data-grid';
function Table({ rows, columns }) {
  return <DataGrid rows={rows} columns={columns} />;
}
export default Table;
