import { Request, Response, NextFunction } from "express";
import IRequestValidator from "../validators/interfaces/irequest.validator";
import RequestValidator from "../validators/request.validator";
import ProductContract from "../validators/contracts/product.contratct";
import { StatusCodes } from "http-status-codes";
import ProductRequest from "../requests/product.request";

const product = (request: Request, response: Response, next: NextFunction) => {
    const validator: IRequestValidator = new RequestValidator(ProductContract, request.body);
    if (!validator.isValid)
        return response.status(StatusCodes.BAD_REQUEST)
            .send({ success: false, errors: validator.errors });
    request.body = request.body as ProductRequest;
};

export default product;