import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

function Button({
	children,
	className,
	...props
}: ComponentPropsWithoutRef<"button">) {
	return (
		<button className={clsx("button", className)} {...props}>
			{children}
		</button>
	);
}

export default Button;
