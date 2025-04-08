import { type ComponentPropsWithoutRef } from "react";

function Input(props: ComponentPropsWithoutRef<"input">) {
	return <input {...props} />
}

export default Input;
