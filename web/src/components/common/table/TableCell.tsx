import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

function TableCell({ children, className }: ComponentPropsWithoutRef<"td">) {
	return <td className={clsx("table__cell", className)}>{children}</td>
}

export default TableCell;
