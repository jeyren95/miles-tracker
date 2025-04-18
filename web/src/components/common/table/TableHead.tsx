import { type ComponentProps } from "react";
import { TableHead as MuiTableHead } from "@mui/material";
import clsx from "clsx";

function TableHead({
	children,
	className,
	...props
}: ComponentProps<typeof MuiTableHead>) {
	return (
		<MuiTableHead className={clsx("table__head", className)} {...props}>
			{children}
		</MuiTableHead>
	);
}

export default TableHead;
