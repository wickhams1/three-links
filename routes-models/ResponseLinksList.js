import Joi from 'joi';

import ResponseMetaPaginated from './ResponseMetaPaginated.js';

const ResponseLinksList = (LinkModel, type) => (Joi.object({
    data: Joi.object({
        links: Joi.array().items(LinkModel).label('ResponseDataLinks' + (type ? '_' + type : ''))
    }).label('ResponseData' + (type ? '_' + type : '')),
    meta: ResponseMetaPaginated()
}).label('ResponseLinksList')
);

export default ResponseLinksList;