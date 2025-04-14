import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

function TableRow({ children, className }: ComponentPropsWithoutRef<"tr">) {
	return <tr className={clsx("table__row", className)}>{children}</tr>
}

export default TableRow;
