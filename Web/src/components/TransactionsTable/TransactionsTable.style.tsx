import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)(() => ({
  padding: "30px",
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader--moving": {
    backgroundColor: "transparent",
  },
}));
