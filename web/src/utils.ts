import { Pathname } from "./types/common";
import { Bank } from "./types/home";
import { ClassType, TripType } from "./types/goals";

export const CONVERSION_RATES = {
	[Bank.DBS]: 2,
	[Bank.UOB]: 2,
	[Bank.CITIBANK]: 0.4,
	[Bank.OCBC]: 0.4,
};

export function convertPointsToMiles(points: number, bank: Bank) {
	const conversionRate = CONVERSION_RATES[bank];
	return points * conversionRate;
}

export const PATHNAME_TO_TEXT: Record<Pathname, string> = {
	[Pathname.HOME]: "Home",
	[Pathname.GOALS]: "Your goals",
}

export const TRIP_TYPE_TO_TEXT: Record<TripType, string> = {
	[TripType.RETURN]: "Return",
	[TripType.ONE_WAY]: "One-way",
}

export const CLASS_TYPE_TO_TEXT: Record<ClassType, string> ={
	[ClassType.ECONOMY]: "Economy",
	[ClassType.PREMIUM_ECONOMY]: "Premium economy",
	[ClassType.BUSINESS]: "Business",
	[ClassType.FIRST_CLASS]: "First class",
}
