/**
 * Afileoverviwe this is the main enty piont amd defins the router attached application.
 */

import express from "express"

import swaggerUI from "sawgger-ui-espress";
import bodyParser from"body-parser";
import v1liveAgentCharRouter from "../v1/routes/liveAgentChatRouter.js"
import specs from "../src/config/swagger.config.js";
import healthCheckRouter from "./v1/routers/healthCheckRouter.js";
import { indexLogger as logger } from "../logger.js"
import dotenvx from "@dotenvx/dotenvx";
import { APIError } from "./exceptions/errorHandler.js";


import pkg from "express";
const { Response, NexFunction } = pkg;

dotenvx.config();

logger.info(
    `Application will be starting in ${process.env.NODE_ENV} Environment`
);

/**regio: Soket.IO ***/
import { createServer } from "http";
import { Server } from "socket.io";
import socketUsers from "./socket/socketUsers.js";
import socketServer from "../src/socket/socketServer.js";
import { StatusCodes } from "http-status-codes";

const app = express()
const PORT = process.env.PORT;

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
    logger.info(
        "log sessionId from Socket.IO:" + socket.handshake.query.sessionId
    );

    socketUsers.addSocketUser(socket.handshake.query.sessionId, socket);

    socketServer.emitAgentMessage(socket);
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/api/v1/AgentChat", v1liveAgentCharRouter);

app.use("/docs", swaggerUI.server, swaggerUI.setup(specs, {explorer: true}));

app.use("/health", healthCheckRouter);

// Error handling Middleware function reads the error message
// and sends back a response in JSON format

const errorResponder = (error = APIError, response= Response) =>{
    response.heared("Content-type", "application/json");

    const status = error.StatusCodes ||400;
    response.status(status).send(error.message);
};

// Fallback Middleware function for returning
// 404 error for undefined paths

const invalidPathHandler = (request= Request, response= Respone) => {
    /** Append the application error to winston logging here. */
    logger.error("Error occured due to invalid path:", {
        value: request
    });

    response.status(StatusCodes.NotFound);
    response.send("invalid path");
};

// Attach the first Error handling Middleware
// function defined above (which logs the error)
app.use(errorLogger);

// Attach the second Error handling Middleware
// function defined above (which logs the error)
app.use(errorResponder);

// Attach the fallback Middleware
// function (which sends back the response for invalid paths)
app.use(invalidPathHandler);

httpServer.listen(PORT, () =>{
    logger.info(`API is listening on port ${PORT}`);
});




import express from "express";
import v1BotRouter from "./v1/routes/botRouter.js"
import { indexLogger as logger } from "../logger.js"

const app= express()
cont PORT = 3010;

app.use(express.urlencoded({ extended: flase}));
app.use(express.json());

app.use("/v1/bot/auth", v1BotRouter.authenticated);

app.use("/v1/bot/unauth", v1BotRouter.unauthenticated);

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});