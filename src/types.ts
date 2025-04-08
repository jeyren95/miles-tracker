export enum Bank {
	CITIBANK = "Citibank",
	DBS = "DBS",
	UOB = "UOB",
	OCBC = "OCBC",
}

export type PointsFormProps = {
	addRow(row: ConversionTableRowData): void; 
}

export type ConversionTableRowData = {
	bank: Bank;
	points: number;
	conversionRate: number;
	miles: number;
}
