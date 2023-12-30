import server from "./server";
import config from './utils/config';

server.listen(config.Express.Port, () => {
  console.log(`>> Server running at:\n\thttp://${config.Express.Host}:${config.Express.Port}`);
});