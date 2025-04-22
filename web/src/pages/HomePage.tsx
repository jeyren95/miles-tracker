import { type ChangeEvent, useReducer, useContext } from "react";
import {
	AddCircleOutline as AddCircleOutlineIcon,
	RestartAlt as RestartAltIcon,
} from "@mui/icons-material";

import ConversionTable from "../components/ConversionTable";
import { Button } from "../components/common/button";

import { conversionTableReducer } from "../reducers";
import { type ReducerAction } from "../types/common";
import {
	type ConversionTableRowData,
	Bank,
	ConversionTableActionType,
} from "../types/home";
import { parseNumber, getLocalStorage, setLocalStorage, CONVERSION_RATES } from "../utils";
import { UserContext } from "../context";

let id = getLocalStorage<number>("conversionTableRowId") || 1;
const DEFAULT_ROW: ConversionTableRowData = {
	id: id++,
	bank: "",
	points: 0,
	conversionRate: 0,
	miles: 0,
};

const initialTableData = getLocalStorage<ConversionTableRowData[]>(
	"conversionTableRowData",
) || [DEFAULT_ROW];

function HomePage() {
	const [tableData, dispatch] = useReducer(
		conversionTableReducer,
		initialTableData,
	);
	const { setUser } = useContext(UserContext) || {};

	function handleBankSelectChange(
		e: ChangeEvent<HTMLSelectElement>,
		row: ConversionTableRowData,
	) {
		const conversionRate = e.target.value
			? CONVERSION_RATES[e.target.value as Bank]
			: 0;
		const miles = conversionRate * Number(row.points);
		const payload: ConversionTableRowData = {
			...row,
			bank: e.target.value as Bank,
			conversionRate,
			miles,
		};
		const action: ReducerAction<
			ConversionTableActionType,
			ConversionTableRowData
		> = {
			type: ConversionTableActionType.UPDATE,
			payload,
		};
		dispatch(action);

		const milesSum = tableData.reduce((acc, curr) => acc + curr.miles, 0);
		setUser?.({ totalMiles: milesSum });
		setLocalStorage("user", { totalMiles: milesSum });
	}

	function handlePointsInputChange(
		e: ChangeEvent<HTMLInputElement>,
		row: ConversionTableRowData,
	) {
		let payload: ConversionTableRowData;

		if (e.target.value === "") {
			payload = { ...row, points: e.target.value };
		} else {
			const points = Number(e.target.value);
			const miles = points * row.conversionRate;
			payload = { ...row, points, miles };
		}

		const action: ReducerAction<
			ConversionTableActionType,
			ConversionTableRowData
		> = {
			type: ConversionTableActionType.UPDATE,
			payload,
		};
		dispatch(action);

		const milesSum = tableData.reduce((acc, curr) => acc + curr.miles, 0);
		setUser?.({ totalMiles: milesSum });
		setLocalStorage("user", { totalMiles: milesSum });
	}

	function handleDelete(payload: ConversionTableRowData) {
		const action: ReducerAction<
			ConversionTableActionType,
			ConversionTableRowData
		> = {
			type: ConversionTableActionType.DELETE,
			payload,
		};
		dispatch(action);

		const milesSum = tableData.reduce((acc, curr) => acc + curr.miles, 0);
		setUser?.({ totalMiles: milesSum });
		setLocalStorage("user", { totalMiles: milesSum });
	}

	function handleInsert() {
		const action: ReducerAction<
			ConversionTableActionType,
			ConversionTableRowData
		> = {
			type: ConversionTableActionType.INSERT,
			payload: { ...DEFAULT_ROW, id: id++ },
		};
		dispatch(action);
		setLocalStorage("conversionTableRowId", id);
	}

	function handleReset() {
		id = 1;
		const action: ReducerAction<
			ConversionTableActionType,
			ConversionTableRowData
		> = {
			type: ConversionTableActionType.RESET,
			payload: { ...DEFAULT_ROW, id: id++ },
		};
		dispatch(action);
		setLocalStorage("conversionTableRowId", id);

		setUser?.({ totalMiles: 0 });
		setLocalStorage("user", { totalMiles: 0 });
	}

	const milesSum = tableData.reduce((acc, curr) => acc + curr.miles, 0);

	return (
		<div className="home-page">
			<div className="home-page__miles-summary">
				<h1 className="home-page__miles-summary-title">
					You have accumulated
					<span className="home-page__miles-sum">{parseNumber(milesSum)}</span> miles.
				</h1>

				<div className="home-page__action-buttons">
					<Button
						variant="outlined"
						className="home-page__button"
						type="button"
						onClick={handleInsert}
						endIcon={<AddCircleOutlineIcon />}
						color="success"
					>
						Add
					</Button>
					<Button
						variant="outlined"
						className="home-page__button"
						type="button"
						onClick={handleReset}
						endIcon={<RestartAltIcon />}
						color="secondary"
					>
						Reset
					</Button>
				</div>
			</div>
			<div className="home-page__conversion-table">
				<ConversionTable
					tableData={tableData}
					onBankSelectChange={handleBankSelectChange}
					onPointsInputChange={handlePointsInputChange}
					onDelete={handleDelete}
				/>
			</div>
		</div>
	);
}

export default HomePage;
