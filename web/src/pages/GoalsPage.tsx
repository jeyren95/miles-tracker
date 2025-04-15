import { type ChangeEvent, useReducer, useState } from "react";

import GoalsTable from "../components/GoalsTable";
import Button from "../components/common/Button";
import ProgressionModal from "../components/ProgressionModal";

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
	const [selectedRow, setSelectedRow] = useState<GoalsTableRowData | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

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

	function handleOpenModal(row: GoalsTableRowData) {
		setSelectedRow(row);
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		setSelectedRow(null);
		setIsModalOpen(false);
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
						onViewProgressionClick={handleOpenModal}
					/>
				</div>
				{isModalOpen && <ProgressionModal onClose={handleCloseModal} selectedRow={selectedRow} />}
			</div>
		</div>
	);
}

export default GoalsPage;
