import { StatusCodes } from "http-status-codes";
import BaseException from "./base.exception";
import ResponseType from "../configurations/enums/response.type";

class ProductException extends BaseException {
    constructor(title?: string, messages?: string[], code?: StatusCodes) {
        super(title, messages, code);

        this.title = title ?? 'Produto Erro';
        this.messages = messages ?? ['Não foi possível processsar a solicitação nesse momento. Tente novamente mais tarde!'];
        this.code = code ?? StatusCodes.BAD_REQUEST;
        this.status = StatusCodes[this.code];
        this.type = this.code >= 500 ? ResponseType[ResponseType.Fatal] : this.code >= 400 ? ResponseType[ResponseType.Error] : ResponseType[ResponseType.Information];
    }
}

export default ProductException;