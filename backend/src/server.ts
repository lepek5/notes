import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import notesRouter from "./routes/notes.route";

const server: Application = express();

server.use(cors());
server.use(express.json());
server.use('/', notesRouter);

server.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error('!! Ecrror cHandling !!', error);
  res.status(error.status || 500);
  res.json({
      'error': {
          'message': error.message,
      },
  });
});

export default server;
