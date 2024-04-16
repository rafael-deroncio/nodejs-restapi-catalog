import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import IRequestValidator from "../validators/interfaces/irequest.validator";
import RequestValidator from "../validators/request.validator";
import CategoryContract from "../validators/contracts/category.contratct";
import CategoryRequest from "../requests/category.request";


const product = (request: Request, response: Response, next: NextFunction) => {
    const validator: IRequestValidator = new RequestValidator(CategoryContract, request.body);

    if (!validator.isValid)
        return response.status(StatusCodes.BAD_REQUEST)
            .send({ success: false, errors: validator.errors });

    request.body = request.body as CategoryRequest;
    
    next();
};

export default product;