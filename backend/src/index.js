import mongo from './mongo.js';
import server from './server.js';
import "dotenv-defaults/config.js";

mongo.connect();

const port = process.env.PORT || 4000;
server.listen({port}, () => {
  console.log(`The server is up on port ${port}!`);
});

