import express from "express";
import { Server } from "socket.io";
import { createServer} from "http";
import cors from "cors";
import { handleSocket } from "./socket.js";

const app = express();

app.use(cors());

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

handleSocket(io);

export {server as app};