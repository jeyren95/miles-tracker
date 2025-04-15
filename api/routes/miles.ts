import { IncomingMessage, ServerResponse } from "http";
import createHttpError from "http-errors";

import { getKrisFlyerMiles } from "../services/miles";
import {
  type GetMilesRes,
  type GetKrisFlyerMilesRes,
  type GetKrisFlyerMilesBody,
  ClassType,
  TripType,
  type GetKrisFlyerMilesError,
  type GetKrisFlyerMilesSuccess,
} from "../types";

export async function getMiles(
  parsedUrl: URL,
  res: ServerResponse<IncomingMessage>,
) {
  const origin = parsedUrl.searchParams.get("origin");
  const destination = parsedUrl.searchParams.get("destination");
  const classType = parsedUrl.searchParams.get("classType");
  const tripType = parsedUrl.searchParams.get("tripType");

  res.setHeader("Content-Type", "application/json");

  if (!origin || !destination || !classType || !tripType) {
    const error = createHttpError.BadRequest("Missing parameters");
    res.statusCode = error.statusCode;
    res.end(JSON.stringify(error));
  }

  const body: GetKrisFlyerMilesBody = {
    data: {
      origin: origin as string,
      destination: destination as string,
      classType: classType as ClassType,
      tripType: tripType as TripType,
    },
  };

  try {
    const getKrisFlyerMilesRes = await getKrisFlyerMiles(body);
    const krisFlyerMilesData: GetKrisFlyerMilesRes =
      await getKrisFlyerMilesRes.json();

    if (!getKrisFlyerMilesRes.ok) {
      const error = createHttpError(
        getKrisFlyerMilesRes.status,
        (krisFlyerMilesData as GetKrisFlyerMilesError).message,
      );
      res.statusCode = error.statusCode;
      throw error;
    }

    if ((krisFlyerMilesData as GetKrisFlyerMilesSuccess).status === "FAILURE") {
      res.write((krisFlyerMilesData as GetKrisFlyerMilesSuccess).ErrorMessage);
    } else {
      const getMilesRes: GetMilesRes = {
        tripType: tripType as TripType,
        classType: classType as ClassType,
        miles:
          (
            krisFlyerMilesData as GetKrisFlyerMilesSuccess
          ).response?.redeemMiles[0].redeemVO.map(({ description, miles }) => ({
            amount: miles,
            description,
          })) || [],
      };

      res.write(JSON.stringify(getMilesRes));
    }
  } catch (err) {
    res.write(JSON.stringify(err));
  } finally {
    res.end();
  }
}
