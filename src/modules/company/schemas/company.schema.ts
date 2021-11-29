import { Joi, Segments } from 'celebrate';

const companySchemaParams = {
    [Segments.PARAMS]: {
        companyId: Joi.number().positive().required(),
    },
}

const companySchemaBody = {
    [Segments.BODY]: {
        companyName: Joi.string().required(),
        companyCode: Joi.number().positive().required(),
        description: Joi.string().optional(),
    },
};

const companySchemaOptions = {
    allowUnknown: true,
    stripUnknown: true,
};


export { companySchemaParams, companySchemaBody, companySchemaOptions }