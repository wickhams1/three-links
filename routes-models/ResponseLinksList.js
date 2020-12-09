import Joi from 'joi';

import ResponseLink from './ResponseLink.js';
import ResponseMetaPaginated from './ResponseMetaPaginated.js';

const ResponseLinksList = Joi.object({
    data: Joi.object({
        links: Joi.array().items(ResponseLink)
    }),
    meta: ResponseMetaPaginated
}).label('ResponseLinksList');

export default ResponseLinksList;