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
    <div style={{ height: 400, width: "100%" }}>
      <StyledDataGrid
        rows={tableRows}
        columns={tableColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        editMode='row'
      />
    </div>
  );
}
