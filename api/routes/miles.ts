import { IncomingMessage, ServerResponse } from "http";
import createHttpError from "http-errors";

import { getKrisFlyerMiles } from "../services/miles";
import {
	type GetMilesRes,
	type GetKrisFlyerMilesRes,
	type GetKrisFlyerMilesBody,
	type Miles,
	ClassType,
	TripType,
	type GetKrisFlyerMilesSuccess,
} from "../types";
import { TRIP_TYPE_TO_TEXT } from "../utils";

export async function getMiles(
	parsedUrl: URL,
	res: ServerResponse<IncomingMessage>,
) {
	const origin = parsedUrl.searchParams.get("origin");
	const destination = parsedUrl.searchParams.get("destination");

	res.setHeader("Content-Type", "application/json");

	if (!origin || !destination) {
		const error = createHttpError.BadRequest("Missing origin or destination");
		res.statusCode = error.statusCode;
		res.end(JSON.stringify(error));
		return;
	}

	const classTypes = Object.values(ClassType);
	const tripTypes = Object.values(TripType);
	const promises = [];

	for (let t of tripTypes) {
		for (let c of classTypes) {
			const body: GetKrisFlyerMilesBody = {
				data: {
					origin: origin as string,
					destination: destination as string,
					classType: c,
					tripType: t,
				},
			};

			promises.push(getKrisFlyerMiles(body));
		}
	}

	try {
		const responses = await Promise.all(promises);

		// if SIA API is down
		if (!responses[0].ok) {
			const error = createHttpError.InternalServerError(
				"Something went wrong, try again later",
			);
			res.statusCode = error.statusCode;
			res.end(JSON.stringify(error));
			return;
		}

		// this happens if either the origin or destination is invalid
		if (responses[0].status === 204) {
			const error = createHttpError.BadRequest("Invalid origin or destination");
			res.statusCode = error.statusCode;
			res.end(JSON.stringify(error));
			return;
		}

		const data: GetKrisFlyerMilesRes[] = await Promise.all(
			responses.map((r) => r.json()),
		);

		// this happens if the origin and destination are valid, but SIA doesn't serve this route
		if ((data[0] as GetKrisFlyerMilesSuccess).status === "FAILURE") {
			const message =
				"Oops! Looks like SIA does not serve this route, please select another origin or destination";
			const getMilesRes: GetMilesRes = { miles: message };
			res.write(JSON.stringify(getMilesRes));
		} else {
			const getMilesRes: GetMilesRes = { miles: [] };

			(data as GetKrisFlyerMilesSuccess[]).forEach((d) => {
				const cabinClass = d.response?.redeemMiles[0]?.cabinClass;
				const redeemVO = d.response?.redeemMiles[0]?.redeemVO;

				(redeemVO || []).forEach((r) => {
					(getMilesRes.miles as Miles[]).push({
						tripType: TRIP_TYPE_TO_TEXT[r.tripType as TripType],
						description: r.description,
						miles: r.miles,
						classType: cabinClass as ClassType,
					});
				});
			});
			res.write(JSON.stringify(getMilesRes));
		}
	} catch (err) {
		res.write(JSON.stringify(err));
	} finally {
		res.end();
	}
}
