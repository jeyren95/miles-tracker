export enum Bank {
	CITIBANK = "Citibank",
	DBS = "DBS",
	UOB = "UOB",
	OCBC = "OCBC",
}

export type ConversionTableRowData = {
	id: number;
	bank: Bank | "";
	points: number;
	conversionRate: number;
	miles: number;
}

export enum ConversionTableActionType {
	INSERT,
	DELETE,
	UPDATE,
	RESET,
}
 
export type ConversionTableAction = {
	type: ConversionTableActionType; 
	payload: ConversionTableRowData;
}
