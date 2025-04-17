import { type ComponentProps } from "react";
import { TableHead as MuiTableHead } from "@mui/material";
import clsx from "clsx";

function TableHead({
	children,
	className,
}: ComponentProps<typeof MuiTableHead>) {
	return (
		<MuiTableHead className={clsx("table__head", className)}>
			{children}
		</MuiTableHead>
	);
}

export default TableHead;
