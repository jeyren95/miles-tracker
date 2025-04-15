import "dotenv/config";
import http from "http";
import createHttpError from "http-errors";

import { getMiles } from "./routes/miles";

const server = http.createServer();

server.on("request", (req, res) => {
  const parsedUrl = new URL(req.url || "", process.env.BASE_URL);

  // set cors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (parsedUrl.pathname === "/miles") {
    getMiles(parsedUrl, res);
  } else {
    const error = createHttpError.NotFound("Not found");
    res.statusCode = error.statusCode;
    res.end(JSON.stringify(error));
  }
});

server.listen(process.env.PORT);
