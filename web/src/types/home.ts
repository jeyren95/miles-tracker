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

export enum ConversionTableHead {
	BANK = "Bank",
	POINTS = "Points",
	CONVERSION_RATE = "Conversion rate",
	MILES = "Miles",
	DELETE_ICON = ""
}
