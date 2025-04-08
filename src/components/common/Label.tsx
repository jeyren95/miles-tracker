import { type ComponentPropsWithoutRef } from "react";

function Label({ children, ...props }: ComponentPropsWithoutRef<"label">) {
	return <label {...props}>{children}</label>
}

export default Label;
