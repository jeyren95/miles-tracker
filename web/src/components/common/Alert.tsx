import { type ComponentProps } from "react";
import { Alert as MuiAlert } from "@mui/material";
import clsx from "clsx";

function Alert({ className, children, ...props }: ComponentProps<typeof MuiAlert>) {
	return <MuiAlert className={clsx(className, "alert")} {...props}>{children}</MuiAlert>
}

export default Alert;
