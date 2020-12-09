import Joi from 'joi';

import ResponseMetaPaginated from './ResponseMetaPaginated.js';

const ResponseLinksList = (LinkModel) => (Joi.object({
    data: Joi.object({
        links: Joi.array().items(LinkModel)
    }),
    meta: ResponseMetaPaginated()
}).label('ResponseLinksList'));

export default ResponseLinksList;