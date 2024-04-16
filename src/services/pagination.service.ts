import PaginationRequest from "../requests/pagination.request";
import PaginationResponse from "../responses/pagination.response";
import IPaginationService from "./interfaces/ipagination.service";

class PaginationService implements IPaginationService {

    private static _instance: IPaginationService;

    static instance(): IPaginationService {
        if (!this._instance) this._instance = new PaginationService();
        return this._instance
    }

    private constructor() { }

    async paged(request: PaginationRequest, url: string, content: object): Promise<PaginationResponse> {
        const total = Math.ceil(request.total / request.size);
        const page = request.page;

        const first = `${url}?page=1&size=${request.size}`;
        const last = `${url}?page=${total}&size=${request.size}`;

        const previous = request.page > 1 ? `${url}?page=${request.page - 1}&size=${request.size}` : null;
        const next = request.page < total ? `${url}?page=${request.page + 1}&size=${request.size}` : null;

        const response: PaginationResponse = new PaginationResponse(
            page,
            total,
            first,
            last,
            previous ?? undefined,
            next ?? undefined
        );

        response.content = content;

        return await Promise.resolve(response)
    }

}

export default PaginationService;
