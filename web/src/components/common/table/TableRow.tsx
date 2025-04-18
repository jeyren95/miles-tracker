import { type ComponentProps } from "react";
import { TableRow as MuiTableRow } from "@mui/material";
import clsx from "clsx";

function TableRow({ children, className, ...props }: ComponentProps<typeof MuiTableRow>) {
	return (
		<MuiTableRow className={clsx("table__row", className)} {...props}>
			{children}
		</MuiTableRow>
	);
}

export default TableRow;
