import {
	Paper as MuiPaper,
	LinearProgress as MuiLinearProgress,
} from "@mui/material";

import { type ClassProgressPaperProps } from "../types/goals";
import { calculatePercentageProgress } from "../utils";

function ClassProgressPaper({ description, miles }: ClassProgressPaperProps) {
	const progress = calculatePercentageProgress(1000, miles);

	return (
		<MuiPaper className="goals-page__class-progress">
			<h3 className="goals-page__class-description">{description}</h3>
			<div className="goals-page__raw-miles">
				<div>Miles acquired: 1000</div>
				<div>Miles required: {miles}</div>
			</div>

			<div className="goals-page__progress-bar">
				<MuiLinearProgress
					className="goals-page__linear-progress"
					variant="determinate"
					value={progress}
				/>
				<div>{progress}%</div>
			</div>
		</MuiPaper>
	);
}

export default ClassProgressPaper;
