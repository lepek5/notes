import server from "./server";
import config from './utils/config';
import database from './database';

const start = async () => {
  await database.connect();

  server.listen(config.Express.Port, () => {
    console.log(`>> Server running at http://${config.Express.Host}:${config.Express.Port}`);
  });
}

start();