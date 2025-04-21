import { useContext } from "react";
import {
	Paper as MuiPaper,
	LinearProgress as MuiLinearProgress,
} from "@mui/material";

import { type ClassProgressPaperProps } from "../types/goals";
import { calculatePercentageProgress } from "../utils";
import { UserContext } from "../context";

function ClassProgressPaper({ description, miles }: ClassProgressPaperProps) {
	const { user } = useContext(UserContext) || {};
	const progress = calculatePercentageProgress(user?.totalMiles || 0, miles);

	return (
		<MuiPaper className="goals-page__class-progress">
			<h3 className="goals-page__class-description">{description}</h3>
			<div className="goals-page__raw-miles">
				<div>Miles acquired: {user?.totalMiles}</div>
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
