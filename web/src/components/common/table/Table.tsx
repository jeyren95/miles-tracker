import { type ComponentProps } from "react";
import { Table as MuiTable } from "@mui/material";
import clsx from "clsx";

function Table({ children, className }: ComponentProps<typeof MuiTable>) {
	return <MuiTable className={clsx("table", className)}>{children}</MuiTable>;
}

export default Table;
