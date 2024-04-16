import PaginationRequest from "../../requests/pagination.request";
import PaginationResponse from "../../responses/pagination.response";

interface IPaginationService {
    paged(request: PaginationRequest, url: string, content: object): Promise<PaginationResponse>
}

export default IPaginationService;
