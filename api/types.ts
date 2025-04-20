export enum TripType {
	ONE_WAY = "O",
	RETURN = "R",
}

export enum ClassType {
	ECONOMY = "EN",
	PREMIUM_ECONOMY = "PN",
	BUSINESS = "BN",
	FIRST_CLASS = "FN",
}

export type GetKrisFlyerMilesBody = {
	data: {
		origin: string;
		destination: string;
		classType: ClassType;
		tripType: TripType;
	};
};

export type GetKrisFlyerMilesRes =
	| GetKrisFlyerMilesSuccess
	| GetKrisFlyerMilesError;

export type GetKrisFlyerMilesSuccess = {
	status: string;
	response?: {
		origin: string;
		destination: string;
		redeemMiles: {
			cabinClass: string;
			redeemVO: {
				description: string;
				miles: number;
				tripType: TripType;
			}[];
			note: string;
			specialNote: string;
		}[];
	};
	ErrorCode?: string;
	ErrorMessage?: string;
};

export type GetKrisFlyerMilesError = {
	statusCode: number;
	error: string;
	message: string;
};

export type GetMilesRes = {
	classType: string;
	tripType: string;
	miles: number;
	description: string;
}[];
