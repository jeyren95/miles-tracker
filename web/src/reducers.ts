import { type ConversionTableRowData, ConversionTableActionType } from "./types/home";
import { type GoalsTableRowData, GoalsTableActionType } from "./types/goals";
import { type ReducerAction } from "./types/common";

export function conversionTableReducer(
	state: ConversionTableRowData[],
	action: ReducerAction<ConversionTableActionType, ConversionTableRowData>,
) {
	switch (action.type) {
		case ConversionTableActionType.INSERT:
			return [...state, action.payload];
		case ConversionTableActionType.DELETE:
			return state.filter((s) => s.id !== action.payload.id);
		case ConversionTableActionType.UPDATE:
			return state.map((s) => {
				if (s.id === action.payload.id) {
					return action.payload;
				}
				return s;
			});
		case ConversionTableActionType.RESET:
			return [action.payload];
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


