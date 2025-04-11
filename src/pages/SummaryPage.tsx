import { type ChangeEvent, useReducer } from "react";

import ConversionTable from "../components/ConversionTable";
import Button from "../components/common/Button";

import { conversionTableReducer } from "../reducers";
import {
	type ConversionTableRowData,
	Bank,
	type ConversionTableAction,
	ConversionTableActionType,
} from "../types";
import { CONVERSION_RATES } from "../utils";

let id = 1;
const DEFAULT_ROW: ConversionTableRowData = {
	id: id++,
	bank: "",
	points: 0,
	conversionRate: 0,
	miles: 0,
};

function SummaryPage() {
	const [tableData, dispatch] = useReducer(conversionTableReducer, [
		DEFAULT_ROW,
	]);

	function handleBankSelectChange(
		e: ChangeEvent<HTMLSelectElement>,
		row: ConversionTableRowData,
	) {
		const conversionRate = e.target.value
			? CONVERSION_RATES[e.target.value as Bank]
			: 0;
		const miles = conversionRate * row.points;
		const payload: ConversionTableRowData = { ...row, conversionRate, miles };
		const action: ConversionTableAction = {
			type: ConversionTableActionType.UPDATE,
			payload,
		};
		dispatch(action);
	}

	function handlePointsInputChange(
		e: ChangeEvent<HTMLInputElement>,
		row: ConversionTableRowData,
	) {
		const points = Number(e.target.value);
		const miles = points * row.conversionRate;
		const payload: ConversionTableRowData = { ...row, points, miles };
		const action: ConversionTableAction = {
			type: ConversionTableActionType.UPDATE,
			payload,
		};
		dispatch(action);
	}

	function handleDelete(payload: ConversionTableRowData) {
		const action: ConversionTableAction = {
			type: ConversionTableActionType.DELETE,
			payload,
		};
		dispatch(action);
	}

	function handleInsert() {
		const action: ConversionTableAction = {
			type: ConversionTableActionType.INSERT,
			payload: { ...DEFAULT_ROW, id: id++ },
		};
		dispatch(action);
	}

	function handleReset() {
		id = 1;
		const action: ConversionTableAction = {
			type: ConversionTableActionType.RESET,
			payload: { ...DEFAULT_ROW, id: id++ },
		};
		dispatch(action);
	}

	return (
		<div className="summary-page">
			<div className="summary-page__conversion-table">
				<ConversionTable
					tableData={tableData}
					onBankSelectChange={handleBankSelectChange}
					onPointsInputChange={handlePointsInputChange}
					onDelete={handleDelete}
				/>
			</div>
			<div className="summary-page__action-buttons">
				<Button
					className="summary-page__button button--bg-blue button--text-white"
					type="button"
					onClick={handleInsert}
				>
					Add
				</Button>
				<Button
					className="summary-page__button button--bg-purple button--text-white"
					type="button"
					onClick={handleReset}
				>
					Reset
				</Button>
			</div>
		</div>
	);
}

export default SummaryPage;
