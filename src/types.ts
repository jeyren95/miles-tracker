import { type ChangeEvent } from "react";

export enum Bank {
	CITIBANK = "Citibank",
	DBS = "DBS",
	UOB = "UOB",
	OCBC = "OCBC",
}

export type ConversionTableRowData = {
	id: number;
	bank: Bank | "";
	points: number | ""; 
	conversionRate: number; 
	miles: number;
};

export enum ConversionTableActionType {
	INSERT,
	DELETE,
	UPDATE,
	RESET,
}

export type ConversionTableAction = {
	type: ConversionTableActionType;
	payload: ConversionTableRowData;
};

export type ConversionTableProps = {
	onBankSelectChange: (
		e: ChangeEvent<HTMLSelectElement>,
		row: ConversionTableRowData,
	) => void;
	onPointsInputChange: (
		e: ChangeEvent<HTMLInputElement>,
		row: ConversionTableRowData,
	) => void;
	tableData: ConversionTableRowData[];
	onDelete: (row: ConversionTableRowData) => void;
};
