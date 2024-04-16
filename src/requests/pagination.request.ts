class PaginationRequest {
    size: number;
    page: number;

    constructor(page?: number, size?: number) {
        this.page = page && page > 0 ? page : 1;
        this.size = size && size > 0 && size <= 10 ? size : 10;
    }
}

export default PaginationRequest;
