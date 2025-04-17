import { type ComponentProps } from "react";
import { TableRow as MuiTableRow } from "@mui/material";
import clsx from "clsx";

function TableRow({ children, className }: ComponentProps<typeof MuiTableRow>) {
	return (
		<MuiTableRow className={clsx("table__row", className)}>
			{children}
		</MuiTableRow>
	);
}

export default TableRow;
