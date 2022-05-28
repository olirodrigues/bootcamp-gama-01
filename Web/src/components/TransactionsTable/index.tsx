import { GridColDef } from "@mui/x-data-grid";
import { StyledDataGrid } from "./TransactionsTable.style";

interface TransactionsTableProps {
  tableColumns: GridColDef[];
  tableRows: {
    id: string;
    status: string;
    data: string;
    descricao: string;
    categoria: string;
    valor: number;
  }[];
}

export function TransactionsTable({ tableColumns, tableRows }: TransactionsTableProps) {
  return (
    <div>
      <StyledDataGrid
        autoHeight
        autoPageSize
        rows={tableRows}
        columns={tableColumns}
        editMode='row'
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableSelectionOnClick
      />
    </div>
  );
}
