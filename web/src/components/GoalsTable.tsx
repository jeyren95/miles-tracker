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
} from "../types/goals";
import airports from "../../airports.json";

const AIRPORT_OPTIONS = [
	{ value: "", text: "--Select city--" },
	...airports.map((c) => ({
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
								options={AIRPORT_OPTIONS}
								value={r.origin}
							>
								{r.origin}
							</Select>
						</TableCell>
						<TableCell>
							<Select
								name="destination"
								onChange={(e) => onSelectChange(e, r)}
								options={AIRPORT_OPTIONS}
								value={r.destination}
							>
								{r.destination}
							</Select>
						</TableCell>
						<TableCell>
							<Button
								variant="outlined"
								color="info"
								type="button"
								className="goals-page__view-progression-button"
								onClick={() => onViewProgressionClick(r)}
							>
								View Progress
							</Button>
						</TableCell>
						<TableCell>
							{tableData.length > 1 && (
								<IconButton
									size="small"
									aria-label="delete"
									onClick={() => onDelete(r)}
								>
									<DeleteOutlinedIcon
										className="icon--color-red"
										fontSize="inherit"
									/>
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
