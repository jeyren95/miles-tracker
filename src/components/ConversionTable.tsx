import { useReducer, type ChangeEvent } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import Select from "./common/Select";
import Input from "./common/Input";
import Button from "./common/Button";

import { conversionTableReducer } from "../reducers";
import { Bank, type ConversionTableRowData, type ConversionTableAction, ConversionTableActionType } from "../types";
import { CONVERSION_RATES } from "../utils";

let id = 1;
const DEFAULT_ROW: ConversionTableRowData = { id: id++, bank: "", points: 0, conversionRate: 0, miles: 0 };
const BANK_OPTIONS = [{ value: "", text: "--Please choose a bank--" }, ...Object.values(Bank).map((b) => ({ value: b, text: b }))];

function ConversionTable() {
	const [rowData, dispatch] = useReducer(conversionTableReducer, [DEFAULT_ROW]);
	
	function handleBankSelectChange(e: ChangeEvent<HTMLSelectElement>, row: ConversionTableRowData) {
		const conversionRate = e.target.value ? CONVERSION_RATES[e.target.value as Bank] : 0;
		const miles = conversionRate * row.points;
		const payload: ConversionTableRowData = { ...row, conversionRate, miles };
		const action: ConversionTableAction = { type: ConversionTableActionType.UPDATE, payload };
		dispatch(action);
	}

	function handlePointsInputChange(e: ChangeEvent<HTMLInputElement>, row: ConversionTableRowData) {
		const points = Number(e.target.value);
		const miles = points * row.conversionRate;
		const payload: ConversionTableRowData = { ...row, points, miles };
		const action: ConversionTableAction = { type: ConversionTableActionType.UPDATE, payload };
		dispatch(action);
	}

	function handleDelete(payload: ConversionTableRowData) {
		const action: ConversionTableAction = { type: ConversionTableActionType.DELETE, payload };
		dispatch(action);
	}

	function handleInsert() {
		const action: ConversionTableAction = { type: ConversionTableActionType.INSERT, payload: { ...DEFAULT_ROW, id: id++ } };
		dispatch(action);
	}

	function handleReset() {
		id = 1;
		const action: ConversionTableAction = { type: ConversionTableActionType.RESET, payload: { ...DEFAULT_ROW, id: id++ } };
		dispatch(action);
	}

	return (
	<>
		<table className="conversion-table">
			<thead className="conversion-table__table-header">
				<tr className="table-header__header-row">
					<th className="header-row__header-cell">Bank</th>
					<th className="header-row__header-cell">Points</th>
					<th className="header-row__header-cell">Conversion rate</th>
					<th className="header-row__header-cell">Miles</th>
				</tr>
			</thead>
			<tbody className="conversion-table__table-body">
				{rowData.map((r) => (
					<tr key={r.id} className="table-body__body-row">
						<td className="body-row__body-cell">
							<Select options={BANK_OPTIONS} onChange={(e) => handleBankSelectChange(e, r)}  /> 
						</td>
						<td className="body-row__body-cell"> 
							<Input onChange={(e) => handlePointsInputChange(e, r)} type="number" value={r.points} name="points" id="points" />
						</td>
						<td className="body-row__body-cell">{r.conversionRate}</td>
						<td className="body-row__body-cell">{r.miles}</td>
						{rowData.length > 1 && <td className="body-row__body-cell"><RiDeleteBin6Line onClick={() => handleDelete(r)} /></td>}
					</tr>
				))}
			</tbody>
		</table>
		<div>
				<Button type="button" onClick={handleInsert}>Add</Button> 
				<Button type="button" onClick={handleReset}>Reset</Button>
		</div>
		</>
	)
}

export default ConversionTable;
