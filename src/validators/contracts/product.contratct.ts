import Joi, { ObjectSchema } from "joi";
import IRequestContract from "./interfaces/irequest.contract";

class ProductContract implements IRequestContract {
    getSchema(): ObjectSchema<any> {
        return ProductContract.schema;
    }

    private static schema = Joi.object({
        name: Joi.string().required().messages({
            'any.required': 'Product name is required.',
            'string.empty': 'Product name cannot be empty.'
        }),
        description: Joi.string().required().messages({
            'any.required': 'Product description is required.',
            'string.empty': 'Product description cannot be empty.'
        }),
        price: Joi.number().required().min(0).max(9999.99).messages({
            'any.required': 'Product price is required.',
            'number.base': 'Product price must be a number.',
            'number.min': 'Product price must be at least 0.',
            'number.max': 'Product price must be at most 9999.99.'
        }),
        stock: Joi.number().required().min(0).max(1000).messages({
            'any.required': 'Product stock is required.',
            'number.base': 'Product stock must be a number.',
            'number.min': 'Product stock must be at least 0.',
            'number.max': 'Product stock must be at most 1000.'
        }),
        category: Joi.object({
            id: Joi.number().required().min(0).messages({
                'any.required': 'Product Category ID is required.',
                'number.base': 'Product Category ID must be a number.',
                'number.min': 'Product Category ID must be at least 0.'
            }).required()
        }).required().messages({
            'any.required': 'Product category is required.'
        })
    })
}

export default ProductContract;
