import { type ChangeEvent, type ComponentProps } from "react";
import { Dialog as MuiDialog } from "@mui/material";

export enum GoalsTableActionType {
	INSERT,
	DELETE,
	UPDATE,
	RESET,
}

export enum ClassType {
	ECONOMY = "Economy",
	PREMIUM_ECONOMY = "Premium economy",
	BUSINESS = "Business",
	FIRST_CLASS = "First class",
}

export enum TripType {
	ONE_WAY = "One-way",
	RETURN = "Return",
}

export enum GoalsTableHead {
	ORIGIN = "Origin",
	DESTINATION = "Destination",
	VIEW_PROGRESS = "Progress",
	DELETE_ICON = "",
}

export type GoalsTableRowData = {
	id: number;
	origin: string;
	destination: string;
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

export type ProgressDialogProps = ComponentProps<typeof MuiDialog> & {
	selectedRow: GoalsTableRowData | null;
};

export type Miles = {
	tripType: TripType;
	classType: ClassType;
	description: string;
	miles: number;
};

export type GetMilesRes = { miles: Miles[] | string };

export type ClassProgressPaperProps = Pick<Miles, "description" | "miles">;
