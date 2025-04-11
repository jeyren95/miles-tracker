import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

function TableHeader({ children, className }: ComponentPropsWithoutRef<"thead">) {
	return <thead className={clsx("table__header", className)}>{children}</thead>
}

export default TableHeader;
