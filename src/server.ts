import express, { Application } from 'express';
import cors from 'cors';
import notesRouter from "./routes/notes.route";

const server: Application = express();

server.use(cors());
server.use(express.json());
server.use('/', notesRouter);

export default server;