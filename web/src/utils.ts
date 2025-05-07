import { Pathname } from "./types/common";
import { Card } from "./types/home";
import { ClassType, TripType } from "./types/goals";

export const CONVERSION_RATES = {
  [Card.CITIBANK]: 0.4,
  [Card.CITIBANK_PREMIERMILES]: 1,
  [Card.DBS]: 2,
  [Card.HSBC]: 0.4,
  [Card.OCBC]: 0.4,
  [Card.OCBC_VOYAGE]: 1,
  [Card.OCBC_90N]: 1,
  [Card.UOB]: 2,
};

export function convertPointsToMiles(points: number, card: Card) {
  const conversionRate = CONVERSION_RATES[card];
  return points * conversionRate;
}

export const PATHNAME_TO_TEXT: Record<Pathname, string> = {
  [Pathname.HOME]: "Home",
  [Pathname.GOALS]: "Your goals",
};

export const TRIP_TYPE_TO_TEXT: Record<TripType, string> = {
  [TripType.RETURN]: "Return",
  [TripType.ONE_WAY]: "One-way",
};

export const CLASS_TYPE_TO_TEXT: Record<ClassType, string> = {
  [ClassType.ECONOMY]: "Economy",
  [ClassType.PREMIUM_ECONOMY]: "Premium economy",
  [ClassType.BUSINESS]: "Business",
  [ClassType.FIRST_CLASS]: "First class",
};

export function calculatePercentageProgress(
  milesAcquired: number,
  milesRequired: number,
) {
  const progress = Math.floor((milesAcquired / milesRequired) * 100);
  return progress > 100 ? 100 : progress;
}

export function setLocalStorage<T>(key: string, value: T) {
  const stringifiedValue = JSON.stringify(value);
  localStorage.setItem(key, stringifiedValue);
}

export function getLocalStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function parseNumber(number: number) {
  return number.toLocaleString("en-US");
}
