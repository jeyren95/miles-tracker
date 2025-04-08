import { useState } from "react";

import PointsForm from "./components/PointsForm";
import ConversionTable from "./components/ConversionTable";

import { type ConversionTableRowData } from "./types";
import { calculateTotalMiles } from "./utils";

function App() {
	const [convertedMiles, setConvertedMiles] = useState<ConversionTableRowData[]>([]);
	
	function addRow(row: ConversionTableRowData) {
		setConvertedMiles([...convertedMiles, row]);
	}

	const totalMiles = calculateTotalMiles(convertedMiles);

  return (
		<div>
			<PointsForm addRow={addRow} />
			<ConversionTable rows={convertedMiles} />
			<div>Total accumulated miles: {totalMiles}</div>
		</div>
  )
}

export default App;
