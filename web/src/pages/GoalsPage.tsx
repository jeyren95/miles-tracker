import { type ChangeEvent, useReducer, useState } from "react";
import {
	AddCircleOutline as AddCircleOutlineIcon,
	RestartAlt as RestartAltIcon,
} from "@mui/icons-material";

import GoalsTable from "../components/GoalsTable";
import { Button } from "../components/common/button";
import ProgressDialog from "../components/ProgressDialog";

import { goalsTableReducer } from "../reducers";
import { type GoalsTableRowData, GoalsTableActionType } from "../types/goals";
import { type ReducerAction } from "../types/common";
import { getLocalStorage, setLocalStorage } from "../utils";

let id = getLocalStorage<number>("goalsTableRowId") || 1;
const DEFAULT_ROW: GoalsTableRowData = {
	id: id++,
	origin: "",
	destination: "",
};
const initialTableData = getLocalStorage<GoalsTableRowData[]>(
	"goalsTableRowData",
) || [DEFAULT_ROW];

function GoalsPage() {
	const [tableData, dispatch] = useReducer(goalsTableReducer, initialTableData);
	const [selectedRow, setSelectedRow] = useState<GoalsTableRowData | null>(
		null,
	);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function handleInsert() {
		const action: ReducerAction<GoalsTableActionType, GoalsTableRowData> = {
			type: GoalsTableActionType.INSERT,
			payload: { ...DEFAULT_ROW, id: id++ },
		};
		setLocalStorage("goalsTableRowId", id);
		dispatch(action);
	}

	function handleSelectChange(
		e: ChangeEvent<HTMLSelectElement>,
		row: GoalsTableRowData,
	) {
		const payload: GoalsTableRowData = {
			...row,
			[e.target.name]: e.target.value,
		};
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

		setLocalStorage("goalsTableRowId", id);
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
					<h1 className="goals-page__goals-table-title">Track your goals</h1>
					<div className="goals-page__action-buttons">
						<Button
							className="goals-page__button"
							type="button"
							onClick={handleInsert}
							variant="outlined"
							color="success"
							endIcon={<AddCircleOutlineIcon />}
						>
							Add
						</Button>
						<Button
							className="goals-page__button"
							type="button"
							onClick={handleReset}
							variant="outlined"
							color="secondary"
							endIcon={<RestartAltIcon />}
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
				{isModalOpen && (
					<ProgressDialog
						onClose={handleCloseModal}
						open={isModalOpen}
						selectedRow={selectedRow}
					/>
				)}
			</div>
		</div>
	);
}

export default GoalsPage;
