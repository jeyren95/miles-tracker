import { Bank, type ConversionTableRowData } from "./types";

export const CONVERSION_RATES = {
	[Bank.DBS]: 2,
	[Bank.UOB]: 2, 
	[Bank.CITIBANK]: 0.4,
	[Bank.OCBC]: 0.4,
}

export function convertPointsToMiles(points: number, bank: Bank) {
	const conversionRate = CONVERSION_RATES[bank];
	return points * conversionRate;
} 

export function calculateTotalMiles(convertedMiles: ConversionTableRowData[]) {
	const sum = convertedMiles.reduce((total, curr) => total + curr.miles, 0);
	return sum;
}
