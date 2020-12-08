import Joi from 'joi';

import ResponseLink from './ResponseLink.js';

const ResponseLinksList = Joi.object({
    data: Joi.object({
        links: Joi.array().items(ResponseLink)
    })
}).label('ResponseLinksList');

export default ResponseLinksList;