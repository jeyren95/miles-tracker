import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

function Table({ children, className }: ComponentPropsWithoutRef<"table">) {
	return (
		<table className={clsx("table", className)}>{children}</table>
	);
}

export default Table;
