import {
	type ConversionTableRowData,
	ConversionTableActionType,
} from "./types/home";
import { type GoalsTableRowData, GoalsTableActionType } from "./types/goals";
import { type ReducerAction } from "./types/common";
import { setLocalStorage } from "./utils";

export function conversionTableReducer(
	state: ConversionTableRowData[],
	action: ReducerAction<ConversionTableActionType, ConversionTableRowData>,
) {
	switch (action.type) {
		case ConversionTableActionType.INSERT:
			const stateAfterInsertion = [...state, action.payload];
			setLocalStorage("conversionTableRowData", stateAfterInsertion);
			return stateAfterInsertion;
		case ConversionTableActionType.DELETE:
			const stateAfterDeletion = state.filter(
				(s) => s.id !== action.payload.id,
			);
			setLocalStorage("conversionTableRowData", stateAfterDeletion);
			return stateAfterDeletion;
		case ConversionTableActionType.UPDATE:
			const stateAfterUpdate = state.map((s) => {
				if (s.id === action.payload.id) {
					return action.payload;
				}
				return s;
			});
			setLocalStorage("conversionTableRowData", stateAfterUpdate);
			return stateAfterUpdate;
		case ConversionTableActionType.RESET:
			const stateAfterReset = [action.payload];
			setLocalStorage("conversionTableRowData", stateAfterReset);
			return stateAfterReset;
		default:
			return state;
	}
}

export function goalsTableReducer(
	state: GoalsTableRowData[],
	action: ReducerAction<GoalsTableActionType, GoalsTableRowData>,
) {
	switch (action.type) {
		case GoalsTableActionType.INSERT:
			return [...state, action.payload];
		case GoalsTableActionType.UPDATE:
			return state.map((s) => {
				if (s.id === action.payload.id) {
					return action.payload;
				}
				return s;
			});
		case GoalsTableActionType.DELETE:
			return state.filter((s) => s.id !== action.payload.id);
		case GoalsTableActionType.RESET:
			return [action.payload];
		default:
			return state;
	}
}
