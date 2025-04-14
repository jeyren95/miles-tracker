import { AiOutlineDelete } from "react-icons/ai";

import {
	Table,
	TableBody,
	TableRow,
	TableHeader,
	TableHeaderCell,
	TableCell,
} from "./common/table";
import Select from "./common/Select";
import Button from "./common/Button";

import { type GoalsTableProps, GoalsTableHeader, ClassType, TripType } from "../types/goals";

const CLASS_TYPE_OPTIONS = [
	{ value: "", text: "--Select flight class--" },
	...Object.values(ClassType).map((c) => ({
		value: c,
		text: c,
	})),
];
const TRIP_TYPE_OPTIONS = [
	{ value: "", text: "--Select trip type--" },
	...Object.values(TripType).map((t) => ({
		value: t, 
		text: t,
	}))
];
const CITY_OPTIONS = [
	{ value: "", text: "--Select city--" },
	...["Osaka", "Tokyo"].map((c) => ({ value: c, text: c })),
];

function GoalsTable({
	tableData,
	onSelectChange,
	onDelete,
}: GoalsTableProps) {
	return (
		<Table className="goals-table">
			<TableHeader>
				<TableRow className="table__header-row">
					{Object.values(GoalsTableHeader).map((h) => <TableHeaderCell key={h}>{h}</TableHeaderCell>)}
				</TableRow>
			</TableHeader>
			<TableBody>
				{tableData.map((r) => (
					<TableRow key={r.id} className="table__body-row">
						<TableCell>
							<Select
								name="origin"
								onChange={(e) => onSelectChange(e, r)}
								options={CITY_OPTIONS}
							>
								{r.origin}
							</Select>
						</TableCell>
						<TableCell>
							<Select
								name="destination"
								onChange={(e) => onSelectChange(e, r)}
								options={CITY_OPTIONS}
							>
								{r.destination}
							</Select>
						</TableCell>
						<TableCell>
							<Select
								name="classType"
								onChange={(e) => onSelectChange(e, r)}
								options={CLASS_TYPE_OPTIONS}
							>
								{r.classType}
							</Select>
						</TableCell>
						<TableCell>
							<Select
								name="tripType"
								onChange={(e) => onSelectChange(e, r)}
								options={TRIP_TYPE_OPTIONS}
							>
								{r.tripType}
							</Select>
						</TableCell>
						<TableCell>
							<Button type="button">View Progression</Button>
						</TableCell>
						<TableCell>
							{tableData.length > 1 && (
								<AiOutlineDelete
									className="icon--color-red"
									onClick={() => onDelete(r)}
								/>
							)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default GoalsTable;
