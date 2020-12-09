import Joi from 'joi';

import paginationDefaults from '../config/paginationDefaults.json';

const PaginationQuery = () => Joi.object({
    page: Joi.number().integer().default(paginationDefaults.page),
    "page-size": Joi.number().integer().default(paginationDefaults["page-size"])
}).label('PaginationQuery');

export default PaginationQuery;