import { TripType } from "./types";

export const TRIP_TYPE_TO_TEXT: Record<TripType, string> = {
	[TripType.RETURN]: "Return",
	[TripType.ONE_WAY]: "One-way",
}
