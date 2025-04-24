import { useState, useContext } from "react";
import {
	Dialog as MuiDialog,
	DialogTitle as MuiDialogTitle,
	DialogContent as MuiDialogContent,
	Switch as MuiSwitch,
} from "@mui/material";

import ClassProgressCard from "./ClassProgressCard";
import Loading from "./common/Loading";
import Alert from "./common/Alert";

import {
	type ProgressDialogProps,
	type GetMilesRes,
	type Miles,
	TripType,
} from "../types/goals";
import { UserContext } from "../context";
import { parseNumber } from "../utils";
import { useFetchData } from "../hooks/useFetchData";

function ProgressDialog({ onClose, open, selectedRow }: ProgressDialogProps) {
	const { user } = useContext(UserContext) || {};
	const [selectedTripType, setSelectedTripType] = useState(TripType.RETURN);
	const { origin, destination } = selectedRow ?? {};
	const endPoint = `${import.meta.env.VITE_API_ENDPOINT}/miles?origin=${origin}&destination=${destination}`;
	const { isLoading, error, data } = useFetchData<GetMilesRes>(endPoint);

	function handleSwitchChange() {
		if (selectedTripType === TripType.RETURN) {
			setSelectedTripType(TripType.ONE_WAY);
		} else {
			setSelectedTripType(TripType.RETURN);
		}
	}

	const isRouteServedByAirline = Array.isArray(data?.miles);
	const filteredData =
		isRouteServedByAirline &&
		((data?.miles as Miles[]) || []).filter(
			(d) => d.tripType === selectedTripType,
		);

	return (
		<MuiDialog
			fullWidth
			maxWidth="lg"
			className="goals-page__progress-dialog"
			open={open}
			onClose={onClose}
		>
			<MuiDialogTitle className="goals-page__progress-dialog-title">
				<div>
					You have accumulated{" "}
					<span className="goals-page__accumulated-miles">
						{parseNumber(user?.totalMiles || 0)}
					</span>{" "}
					miles.
				</div>
				<div className="goals-page__trip-type-toggle">
					<span>{TripType.ONE_WAY}</span>
					<MuiSwitch
						disabled={isLoading || !isRouteServedByAirline || !!error}
						onChange={handleSwitchChange}
						checked={selectedTripType === TripType.RETURN}
					/>
					<span>{TripType.RETURN}</span>
				</div>
			</MuiDialogTitle>
			{isLoading && !error && (
				<MuiDialogContent className="goals-page__progress-dialog-loading">
					<Loading size={60} />
				</MuiDialogContent>
			)}

			{!isLoading && error && (
				<MuiDialogContent className="goals-page__progress-dialog-error">
					<Alert severity="error">{error}</Alert>
				</MuiDialogContent>
			)}

			{!isLoading && !error && (
				<MuiDialogContent className="goals-page__progress-dialog-content">
					{isRouteServedByAirline ? (
						(filteredData as Miles[]).map((d) => <ClassProgressCard {...d} />)
					) : (
						<Alert severity="info">{data?.miles as string}</Alert>
					)}
				</MuiDialogContent>
			)}
		</MuiDialog>
	);
}

export default ProgressDialog;
