import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import BaseException from "../exceptions/base.exception";

const exception = {
    handler: (error: Error, request: Request, response: Response, next: NextFunction) => {

        if (error instanceof BaseException)
            return response
                .status(error.code)
                .send(error.description());

        const exception: BaseException = new BaseException(
            'Erro inesperado',
            ['Tente novamente mais tarde!'],
            StatusCodes.INTERNAL_SERVER_ERROR);

        return response
            .status(exception.code)
            .send(exception.description());
    }
};

export default exception;
