import { type ComponentPropsWithoutRef } from "react";

function Button({ children, ...props }: ComponentPropsWithoutRef<"button">) {
	return <button {...props}>{children}</button>
}

export default Button;
