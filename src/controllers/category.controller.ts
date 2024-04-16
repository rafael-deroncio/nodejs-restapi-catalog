import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const controller = {
    category: {
        paged: async (request: Request, response: Response, next: NextFunction) => {
            try {
                return response.status(StatusCodes.OK).send({});
            } catch (error) {
                next(error)
            }
        },

        get: async (request: Request, response: Response, next: NextFunction) => {
            try {
                return response.status(StatusCodes.OK).send({});
            } catch (error) {
                next(error)
            }
        },

        post: async (request: Request, response: Response, next: NextFunction) => {
            try {
                return response.status(StatusCodes.OK).send({});
            } catch (error) {
                next(error)
            }
        },

        put: async (request: Request, response: Response, next: NextFunction) => {
            try {
                return response.status(StatusCodes.OK).send({});
            } catch (error) {
                next(error)
            }
        },

        delete: async (request: Request, response: Response, next: NextFunction) => {
            try {
                return response.status(StatusCodes.OK).send({});
            } catch (error) {
                next(error)
            }
        }
    }
};

export default controller;