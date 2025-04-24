import { type ComponentProps } from "react";
import { CircularProgress as MuiCircularProgress } from "@mui/material";
import clsx from "clsx";

function Loading({ className, ...props }: ComponentProps<typeof MuiCircularProgress>) {
	return <MuiCircularProgress className={clsx(className, "loading")} {...props} />
}

export default Loading;
