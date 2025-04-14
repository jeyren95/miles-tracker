import { AiOutlineDelete } from "react-icons/ai";

import Select from "./common/Select";
import Input from "./common/Input";
import {
	Table,
	TableBody,
	TableRow,
	TableHeader,
	TableCell,
	TableHeaderCell,
} from "./common/table";

import { Bank, type ConversionTableProps } from "../types/home";

const BANK_OPTIONS = [
	{ value: "", text: "--Select a bank--" },
	...Object.values(Bank).map((b) => ({ value: b, text: b })),
];
const MIN_POINTS = 0;

function ConversionTable({
	tableData,
	onBankSelectChange,
	onPointsInputChange,
	onDelete,
}: ConversionTableProps) {
	return (
		<Table className="summary-page__conversion-table">
			<TableHeader>
				<TableRow className="table__header-row">
					<TableHeaderCell>Bank</TableHeaderCell>
					<TableHeaderCell>Points</TableHeaderCell>
					<TableHeaderCell>Conversion rate</TableHeaderCell>
					<TableHeaderCell>Miles</TableHeaderCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				{tableData.map((r) => (
					<TableRow className="table__body-row" key={r.id}>
						<TableCell>
							<Select
								options={BANK_OPTIONS}
								onChange={(e) => onBankSelectChange(e, r)}
							/>
						</TableCell>
						<TableCell>
							<Input
								onChange={(e) => onPointsInputChange(e, r)}
								type="number"
								value={r.points}
								name="points"
								id="points"
								min={MIN_POINTS}
							/>
						</TableCell>
						<TableCell>{r.conversionRate}</TableCell>
						<TableCell>{r.miles}</TableCell>
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

export default ConversionTable;
