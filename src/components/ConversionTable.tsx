import { Bank } from "../types";

type ConversionTableProps = {
	rows: {
	bank: Bank;
	points: number;
	conversionRate: number;
	miles: number;
	}[];
};

function ConversionTable({ rows }: ConversionTableProps) {
	return (
		<table>
			<thead>
				<tr>
					<th>Bank</th>
					<th>Points</th>
					<th>Conversion rate</th>
					<th>Miles</th>
				</tr>
			</thead>
			<tbody>
			{rows.map((r) => ((
				<tr key={crypto.randomUUID()}>
					<td>{r.bank}</td>
					<td>{r.points}</td>
					<td>{r.conversionRate}</td>
					<td>{r.miles}</td>
				</tr>
			)))}
			</tbody>
		</table>
	)
}

export default ConversionTable;
