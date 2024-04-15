import express from "express";
import http from 'http';
import routes from "./routes";
import config from "./config";

const app = express();
app.use(express.json());
app.use(routes);
// app.use(exception.handler);
app.set('host', config.server.host);
app.set('port', config.server.port);

const server = http.createServer(app);
server.listen(config.server.port, config.server.onListen);
server.on('listening', config.server.onListening);
server.on('error', config.server.onError);
