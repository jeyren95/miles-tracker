import { DeleteOutlined as DeleteOutlinedIcon } from "@mui/icons-material";

import {
	Table,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "./common/table";
import Select from "./common/Select";
import { Button, IconButton } from "./common/button";

import {
	type GoalsTableProps,
	GoalsTableHead,
	ClassType,
	TripType,
} from "../types/goals";
import { TRIP_TYPE_TO_TEXT, CLASS_TYPE_TO_TEXT } from "../utils";

const CLASS_TYPE_OPTIONS = [
	{ value: "", text: "--Select flight class--" },
	...Object.values(ClassType).map((c) => ({
		value: c,
		text: CLASS_TYPE_TO_TEXT[c],
	})),
];
const TRIP_TYPE_OPTIONS = [
	{ value: "", text: "--Select trip type--" },
	...Object.values(TripType).map((t) => ({
		value: t,
		text: TRIP_TYPE_TO_TEXT[t],
	})),
];
const CITY_OPTIONS = [
	{ value: "", text: "--Select city--" },
	...["Singapore - SIN", "Tokyo (Haneda Intl) - HND"].map((c) => ({
		value: c,
		text: c,
	})),
];

function GoalsTable({
	tableData,
	onSelectChange,
	onDelete,
	onViewProgressionClick,
}: GoalsTableProps) {
	return (
		<Table>
			<TableHead>
				<TableRow>
					{Object.values(GoalsTableHead).map((h) => (
						<TableCell key={h}>{h}</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{tableData.map((r) => (
					<TableRow key={r.id}>
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
							<Button type="button" onClick={() => onViewProgressionClick(r)}>
								View Progression
							</Button>
						</TableCell>
						<TableCell>
							{tableData.length > 1 && (
								<IconButton size="small" aria-label="delete" onClick={() => onDelete(r)}>
									<DeleteOutlinedIcon className="icon--color-red" fontSize="inherit" />
								</IconButton>
							)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default GoalsTable;
