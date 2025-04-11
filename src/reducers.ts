import {
	type ConversionTableRowData,
	type ConversionTableAction,
	ConversionTableActionType,
} from "./types";

export function conversionTableReducer(
	state: ConversionTableRowData[],
	action: ConversionTableAction,
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
