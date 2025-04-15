import { type GetKrisFlyerMilesBody } from "../types";

const ENDPOINT = "https://www.singaporeair.com/krisflyer/miles/milesRedemCall";

export async function getKrisFlyerMiles(body: GetKrisFlyerMilesBody) {
  return fetch(ENDPOINT, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
}
