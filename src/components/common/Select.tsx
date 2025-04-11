import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type Option = {
  value: string;
  text: string;
};

type SelectProps = ComponentPropsWithoutRef<"select"> & { options: Option[] };

function Select({ options, className, ...props }: SelectProps) {
  return (
    <select className={clsx("select", className)} {...props}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.text}
        </option>
      ))}
    </select>
  );
}

export default Select;
