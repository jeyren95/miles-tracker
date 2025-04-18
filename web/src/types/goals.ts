import { type ChangeEvent } from "react";

export enum GoalsTableActionType {
	INSERT,
	DELETE,
	UPDATE,
	RESET,
}

export enum ClassType {
	ECONOMY = "EN",
	PREMIUM_ECONOMY = "PN",
	BUSINESS = "BN",
	FIRST_CLASS = "FN",
}

export enum TripType {
	ONE_WAY = "O",
	RETURN = "R",
}

export enum GoalsTableHead {
	ORIGIN = "Origin",
	DESTINATION = "Destination",
	CLASS_TYPE = "Flight class",
	TRIP_TYPE = "Trip type",
	VIEW_PROGRESSION = "",
	DELETE_ICON = "",
}

export type GoalsTableRowData = {
	id: number;
	origin: string;
	destination: string;
	classType: ClassType | "";
	tripType: TripType | "";
};

export type GoalsTableProps = {
	tableData: GoalsTableRowData[];
	onSelectChange: (
		e: ChangeEvent<HTMLSelectElement>,
		row: GoalsTableRowData,
	) => void;
	onDelete: (row: GoalsTableRowData) => void;
	onViewProgressionClick: (r: GoalsTableRowData) => void;
};

export type ProgressionModalProps = {
	selectedRow: GoalsTableRowData | null;
	onClose: () => void;
};

export type GetMilesRes = {
	classType: ClassType;
	tripType: TripType;
	miles: {
		description: string;
		amount: number;
	}[];
};
