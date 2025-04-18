import { type ComponentProps } from "react";
import { Button as MuiButton } from "@mui/material";
import clsx from "clsx";

function Button({
	children,
	className,
	...props
}: ComponentProps<typeof MuiButton>) {
	return (
		<MuiButton className={clsx("button", className)} {...props}>
			{children}
		</MuiButton>
	);
}

export default Button;
