import { type ComponentPropsWithoutRef }from "react";

type Option = {
	value: string;
	text: string;
}
type SelectProps = ComponentPropsWithoutRef<"select"> & { options: Option[] }

function Select({ options, ...props }: SelectProps) {
	return (<select {...props}>
		{options.map((o) => <option key={o.value} value={o.value}>{o.text}</option>)}
	</select>
	);
}

export default Select;
