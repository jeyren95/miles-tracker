import { useState, type FormEvent, type ChangeEvent } from "react";

import Label from "./common/Label";
import Button from "./common/Button";
import Input from "./common/Input";
import Select from "./common/Select";

import { Bank, type PointsFormProps } from "../types";
import { convertPointsToMiles, CONVERSION_RATES } from "../utils";

const MIN_POINTS = 0;

function PointsForm({ addRow }: PointsFormProps) {
	const [bank, setBank] = useState<Bank>(Object.values(Bank)[0]);
	const [points, setPoints] = useState("0");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		const miles = convertPointsToMiles(Number(points), bank);
		addRow({
			bank,
			points: Number(points),
			conversionRate: CONVERSION_RATES[bank],
			miles,
			})
	}

	function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
		setBank(e.target.value as Bank);
	}

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		// handle decimal points
		setPoints(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<Label htmlFor="bank">Bank</Label>
			<Select value={bank} id="bank" name="bank" options={Object.values(Bank)} onChange={handleSelectChange} />
			
			<Label htmlFor="points">Points</Label>
			<Input value={points} type="number" name="points" id="points" onChange={handleInputChange} min={MIN_POINTS} required />

			<Button type="submit">Add</Button>
		</form>
	)
}

export default PointsForm;
