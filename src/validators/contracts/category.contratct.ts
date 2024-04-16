import Joi, { ObjectSchema } from "joi";
import IRequestContract from "./interfaces/irequest.contract";

class CategoryContract implements IRequestContract {
    getSchema(): ObjectSchema<any> {
        return CategoryContract.schema;
    }

    private static schema = Joi.object({
        name: Joi.string().required().messages({
            'any.required': 'Product name is required.',
            'string.empty': 'Product name cannot be empty.'
        }),
        description: Joi.string().required().messages({
            'any.required': 'Product description is required.',
            'string.empty': 'Product description cannot be empty.'
        })
    })
}

export default CategoryContract;