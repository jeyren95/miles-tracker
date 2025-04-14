import { type ChangeEvent } from "react";

export enum GoalsTableActionType {
	INSERT,
	DELETE,
	UPDATE,
	RESET,
}

export enum ClassType {
	ECONOMY = "Economy",
	PREMIUM_ECONOMY = "Premium Economy",
	BUSINESS = "Business",
	FIRST_CLASS = "First Class",
}

export enum TripType {
	ONE_WAY = "One-way",
	RETURN = "Return",
}

export enum GoalsTableHeader {
	ORIGIN = "Origin",
	DESTINATION = "Destination",
	CLASS_TYPE = "Flight class",
	TRIP_TYPE = "Trip type",
}

export type GoalsTableRowData = {
	id: number;
	origin: string;
	destination: string;
	classType: ClassType | "";
	tripType: TripType | "";
}

export type GoalsTableProps = {
	tableData: GoalsTableRowData[];
	onSelectChange: (e: ChangeEvent<HTMLSelectElement>, row: GoalsTableRowData) => void;
	onDelete: (row: GoalsTableRowData) => void; 
}
