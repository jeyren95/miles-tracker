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
	let updatedState: ConversionTableRowData[];

	switch (action.type) {
		case ConversionTableActionType.INSERT:
			updatedState = [...state, action.payload];
			setLocalStorage("conversionTableRowData", updatedState);
			return updatedState;
		case ConversionTableActionType.DELETE:
			updatedState = state.filter((s) => s.id !== action.payload.id);
			setLocalStorage("conversionTableRowData", updatedState);
			return updatedState;
		case ConversionTableActionType.UPDATE:
			updatedState = state.map((s) => {
				if (s.id === action.payload.id) {
					return action.payload;
				}
				return s;
			});
			setLocalStorage("conversionTableRowData", updatedState);
			return updatedState;
		case ConversionTableActionType.RESET:
			updatedState = [action.payload];
			setLocalStorage("conversionTableRowData", updatedState);
			return updatedState;
		default:
			return state;
	}
}

export function goalsTableReducer(
	state: GoalsTableRowData[],
	action: ReducerAction<GoalsTableActionType, GoalsTableRowData>,
) {
	let updatedState: GoalsTableRowData[];

	switch (action.type) {
		case GoalsTableActionType.INSERT:
			updatedState = [...state, action.payload];
			setLocalStorage("goalsTableRowData", updatedState);
			return updatedState;
		case GoalsTableActionType.UPDATE:
			updatedState = state.map((s) => {
				if (s.id === action.payload.id) {
					return action.payload;
				}
				return s;
			});
			setLocalStorage("goalsTableRowData", updatedState);
			return updatedState;
		case GoalsTableActionType.DELETE:
			updatedState = state.filter((s) => s.id !== action.payload.id);
			setLocalStorage("goalsTableRowData", updatedState);
			return updatedState;
		case GoalsTableActionType.RESET:
			updatedState = [action.payload];
			setLocalStorage("goalsTableRowData", updatedState);
			return updatedState;
		default:
			return state;
	}
}
