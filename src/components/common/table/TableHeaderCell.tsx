import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

function TableHeaderCell({ children, className }: ComponentPropsWithoutRef<"th">) {
	return <th className={clsx("table__header-cell", className)}>{children}</th>
}

export default TableHeaderCell;
