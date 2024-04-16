import { Request, Response, NextFunction } from "express";
import PaginationRequest from "../requests/pagination.request";

const pagination = (request: Request, response: Response, next: NextFunction) => {
    const page = Number(request.query.page);
    const size = Number(request.query.size);
    request.body = new PaginationRequest(page, size);
    next();
};

export default pagination;