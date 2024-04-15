import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IParameters from '../configurations/interfaces/iparameters';
import Parameters from '../configurations/parameters';

const _parameters: IParameters = Parameters.instance();

const controller = {
    index: async (request: Request, response: Response, next: NextFunction) => {
        response.status(StatusCodes.OK)
            .send({
                route: request.route.path,
                name: _parameters.environment().APP_NAME,
                version: _parameters.environment().APP_VERSION
            });
        next();
    }
};

export default controller;