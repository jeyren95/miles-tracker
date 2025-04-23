import { useContext } from "react";
import {
  LinearProgress as MuiLinearProgress,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  CardContent as MuiCardContent,
} from "@mui/material";

import { type ClassProgressPaperProps } from "../types/goals";
import { calculatePercentageProgress } from "../utils";
import { UserContext } from "../context";
import { parseNumber } from "../utils"

function ClassProgressCard({ description, miles }: ClassProgressPaperProps) {
  const { user } = useContext(UserContext) || {};
  const progress = calculatePercentageProgress(user?.totalMiles || 0, miles);

  return (
    <MuiCard className="goals-page__class-progress-card">
      <MuiCardHeader
        title={description}
        subheader={`Miles required: ${parseNumber(miles)}`}
      />
      <MuiCardContent className="goals-page__class-progress-card-content">
        <MuiLinearProgress
          className="goals-page__progress-bar"
          variant="determinate"
          value={progress}
        />
        <p>{progress}%</p>
      </MuiCardContent>
    </MuiCard>
  );
}

export default ClassProgressCard;
