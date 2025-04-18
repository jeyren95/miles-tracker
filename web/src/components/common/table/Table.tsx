import { type ComponentProps } from "react";
import { Table as MuiTable, TableContainer as MuiTableContainer } from "@mui/material";
import clsx from "clsx";

function Table({ children, className, ...props }: ComponentProps<typeof MuiTable>) {
	return (
		<MuiTableContainer>
			<MuiTable className={clsx("table", className)} {...props}>{children}</MuiTable>
		</MuiTableContainer>
	)
}

export default Table;
