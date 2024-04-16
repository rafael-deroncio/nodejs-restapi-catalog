import IParameters from "./configurations/interfaces/iparameters";
import Parameters from "./configurations/parameters";
import http from 'http';
import path from 'path';

const parameters: IParameters = Parameters.instance();

const HOST: string = parameters.environment().APP_HOST ?? 'localhost';
const PORT: string = parameters.environment().APP_PORT ?? '3000';
const ENV: string = parameters.environment().APP_ENV ?? 'dev';

const TYPEORM_TYPE: string = parameters.environment().TYPEORM_TYPE ?? 'sqlite';
const TYPEORM_DATABASE: string = parameters.environment().TYPEORM_DATABASE ?? './database.sqlite';
const TYPEORM_LOGGING: boolean = Boolean(parameters.environment().TYPEORM_LOGGING) ?? false;

const config = {
    app: {
        environment: ENV,
    },

    server: {
        host: HOST,
        port: PORT,

        onListen() {
            console.log(`API running in http://${HOST}:${PORT}`);
        },

        onListening(server: http.Server) {
            if (server && server.address()) {
                const addr = server.address();
                const bind = typeof addr === 'string' ?
                    `pipe ${addr}` :
                    `port ${addr?.port}`;
                console.log(`Listening on ${bind}`);
            } else {
                console.log('Server listening...');
            }
        },

        onError(error: NodeJS.ErrnoException) {
            if (error.syscall !== 'listen')
                throw error;

            const bind = typeof process.env.PORT === 'string' ?
                `Pipe ${process.env.PORT}` :
                `Port ${process.env.PORT}`;

            switch (error.code) {
                case 'EACCES':
                    console.error(`${bind} required elevated privileges`);
                    process.exit(1);
                    break;

                case 'EADDRINUSE':
                    console.error(`${bind} is already in use`);
                    process.exit(1);
                    break;

                case 'ECONNREFUSED':
                    console.error(`Connection refused to ${bind}`);
                    process.exit(1);
                    break;

                case 'EHOSTUNREACH':
                    console.error(`Host unreachable at ${bind}`);
                    process.exit(1);
                    break;

                case 'ETIMEDOUT':
                    console.error(`Connection to ${bind} timed out`);
                    process.exit(1);
                    break;

                default:
                    throw error;
            }
        }
    },

    database: {
        options: {
            type: TYPEORM_TYPE,
            database: TYPEORM_DATABASE,
            synchronize: ENV === 'dev' ? true : false,
            logging: ENV === 'dev' ? TYPEORM_LOGGING : false,
            entities: [
                path.join(__dirname, './configurations/entities/*.{js,ts}')
            ],
            migrations: [
                path.join(__dirname, './configurations/migrations/*.{js,ts}')
            ]
        }
    }
};

export default config;
