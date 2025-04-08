import { type ComponentPropsWithoutRef }from "react";

type SelectProps = ComponentPropsWithoutRef<"select"> & { options: (string | number)[] }

function Select({ options, ...props }: SelectProps) {
	return (<select {...props}>
		{options.map((o) => <option value={o}>{o}</option>)}
	</select>
	);
}

export default Select;
