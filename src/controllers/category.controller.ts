import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ICategoryService from '../services/interfaces/icategory.service';
import CategoryService from '../services/category.service';
import PaginationRequest from '../requests/pagination.request';
import CategoryResponse from '../responses/category.response';
import CategoryRequest from '../requests/category.request';
import PaginationResponse from '../responses/pagination.response';
import PaginationService from '../services/pagination.service';

const service: ICategoryService = CategoryService.instance();


const controller = {
    category: {
        paged: async (request: Request, response: Response, next: NextFunction) => {
            try {
                const paginationRequest: PaginationRequest = request.body;
                const cayegories: Array<CategoryRequest> = await service.paged(paginationRequest)

                paginationRequest.total = await service.getTotalCategories();
                const url: string = `${request.protocol}://${request.get('host')}${request.path}`
                
                const paged: PaginationResponse = await PaginationService.instance().paged(paginationRequest, url, cayegories);

                return response.status(StatusCodes.OK).send(paged);
            } catch (error) {
                next(error)
            }
        },

        get: async (request: Request, response: Response, next: NextFunction) => {
            try {
                const id: number = Number(request.params.id);
                const categoryResponse: CategoryResponse = await service.get(id);
                return response.status(StatusCodes.OK).send(categoryResponse);
            } catch (error) {
                next(error)
            }
        },

        post: async (request: Request, response: Response, next: NextFunction) => {
            try {
                const categoryRequest: CategoryRequest = request.body;
                const categoryResponse: CategoryResponse = await service.create(categoryRequest);
                return response.status(StatusCodes.OK).send(categoryResponse);
            } catch (error) {
                next(error)
            }
        },

        put: async (request: Request, response: Response, next: NextFunction) => {
            try {
                const id: number = Number(request.params.id);
                const categoryRequest: CategoryRequest = request.body;
                const categoryResponse: CategoryResponse = await service.update(id, categoryRequest);
                return response.status(StatusCodes.OK).send(categoryResponse);
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
