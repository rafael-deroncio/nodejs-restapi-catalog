import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IProductService from '../services/interfaces/iproduct.service';
import ProductService from '../services/product.service';
import ProductResponse from '../responses/product.response';
import PaginationRequest from '../requests/pagination.request';
import ProductRequest from '../requests/product.request';
import IPaginationService from '../services/interfaces/ipagination.service';
import PaginationService from '../services/pagination.service';
import PaginationResponse from '../responses/pagination.response';

const service: IProductService = ProductService.instance();

const controller = {
    product: {
        paged: async (request: Request, response: Response, next: NextFunction) => {
            try {
                const paginationRequest: PaginationRequest = request.body;
                const products: Array<ProductResponse> = await service.paged(paginationRequest)

                paginationRequest.total = await service.getTotalProducts();
                const url: string = `${request.protocol}://${request.get('host')}${request.path}`
                
                const paged: PaginationResponse = await PaginationService.instance().paged(paginationRequest, url, products);

                return response.status(StatusCodes.OK).send(paged);
            } catch (error) {
                next(error)
            }
        },

        get: async (request: Request, response: Response, next: NextFunction) => {
            try {
                const id: number = Number(request.params.id);
                const productResponse: ProductResponse = await service.get(id);
                return response.status(StatusCodes.OK).send(productResponse);
            } catch (error) {
                next(error)
            }
        },

        post: async (request: Request, response: Response, next: NextFunction) => {
            try {
                const productRequest: ProductRequest = request.body;
                const productResponse: ProductResponse = await service.create(productRequest);
                return response.status(StatusCodes.OK).send(productResponse);
            } catch (error) {
                next(error)
            }
        },

        put: async (request: Request, response: Response, next: NextFunction) => {
            try {
                const id: number = Number(request.params.id);
                const productRequest: ProductRequest = request.body;
                const productResponse: ProductResponse = await service.update(id, productRequest);
                return response.status(StatusCodes.OK).send(productResponse);
            } catch (error) {
                next(error)
            }
        },

        delete: async (request: Request, response: Response, next: NextFunction) => {
            try {
                const id: number = Number(request.params.id);
                const result: boolean = await service.delete(id);
                return response.status(StatusCodes.OK).send(result);
            } catch (error) {
                next(error)
            }
        }
    }
};

export default controller;
