import { type ComponentProps } from "react";
import { TableBody as MuiTableBody } from "@mui/material";
import clsx from "clsx";

function TableBody({
	children,
	className,
}: ComponentProps<typeof MuiTableBody>) {
	return (
		<MuiTableBody className={clsx("table__body", className)}>
			{children}
		</MuiTableBody>
	);
}

export default TableBody;
