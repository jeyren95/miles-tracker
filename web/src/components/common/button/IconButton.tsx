import { type ComponentProps } from "react";
import { IconButton as MuiIconButton } from "@mui/material";
import clsx from "clsx";

function IconButton({
	children,
	className,
}: ComponentProps<typeof MuiIconButton>) {
	return <MuiIconButton className={clsx("icon-button", className)}>{children}</MuiIconButton>;
}

export default IconButton;
