import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

function TableBody({ children, className }: ComponentPropsWithoutRef<"tbody">) {
	return <tbody className={clsx("table__body", className)}>{children}</tbody>
}

export default TableBody;
