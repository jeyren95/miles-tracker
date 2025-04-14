import { type ChangeEvent, useReducer } from "react";

import GoalsTable from "../components/GoalsTable";
import Button from "../components/common/Button";

import { goalsTableReducer } from "../reducers";
import {
	type GoalsTableRowData,
	GoalsTableActionType,
} from "../types/goals";
import { type ReducerAction } from "../types/common";

let id = 1;
const DEFAULT_ROW: GoalsTableRowData = {
	id: id++,
	origin: "",
	destination: "",
	classType: "",
	tripType: "",
};

function GoalsPage() {
	const [tableData, dispatch] = useReducer(goalsTableReducer, [DEFAULT_ROW]);

	function handleInsert() {
		const action: ReducerAction<GoalsTableActionType, GoalsTableRowData> = {
			type: GoalsTableActionType.INSERT,
			payload: { ...DEFAULT_ROW, id: id++ },
		};
		dispatch(action);
	}

	function handleSelectChange(e: ChangeEvent<HTMLSelectElement>, row: GoalsTableRowData) {
		const payload: GoalsTableRowData = { ...row, [e.target.name]: e.target.value };
		const action: ReducerAction<GoalsTableActionType, GoalsTableRowData> = {
			type: GoalsTableActionType.UPDATE,
			payload,
		};
		dispatch(action);
	}

	function handleDelete(row: GoalsTableRowData) {
		const action: ReducerAction<GoalsTableActionType, GoalsTableRowData> = {
			type: GoalsTableActionType.DELETE,
			payload: row,
		};
		dispatch(action);
	}

	function handleReset() {
		id = 1;
		const action: ReducerAction<GoalsTableActionType, GoalsTableRowData> = {
			type: GoalsTableActionType.RESET,
			payload: { ...DEFAULT_ROW },
		};
		dispatch(action);
	}

	return (
		<div className="goals-page">
			<div className="goals-page__goal-tracking">
				<div className="goals-page__goals-table-header">
					<h1 className="goals-page__goals-table-title">
						Track your goals
					</h1>
					<div className="goals-page__action-buttons">
						<Button
							className="goals-page__button button--bg-blue button--text-white"
							type="button"
							onClick={handleInsert}
						>
							Add
						</Button>
						<Button
							className="goals-page__button button--bg-purple button--text-white"
							type="button"
							onClick={handleReset}
						>
							Reset
						</Button>
					</div>
				</div>
				<div className="goals-page__goals-table">
					<GoalsTable
						tableData={tableData}
						onSelectChange={handleSelectChange}
						onDelete={handleDelete}
					/>
				</div>
			</div>
		</div>
	);
}

export default GoalsPage;
