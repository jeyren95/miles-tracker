import { type ComponentProps } from "react";
import { TableCell as MuiTableCell } from "@mui/material";
import clsx from "clsx";

function TableCell({
	children,
	className,
	...props
}: ComponentProps<typeof MuiTableCell>) {
	return (
		<MuiTableCell className={clsx("table__cell", className)} {...props}>
			{children}
		</MuiTableCell>
	);
}

export default TableCell;
