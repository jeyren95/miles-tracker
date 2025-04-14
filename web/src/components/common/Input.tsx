import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
	return <input className={clsx("input", className)} {...props} />
}

export default Input;
