import Joi from 'joi';

const ResponseMetaPaginated = () => Joi.object({
    totalPages: Joi.number().integer(),
    totalRecords: Joi.number().integer()
}).label('ResponseMetaPaginated');

export default ResponseMetaPaginated;