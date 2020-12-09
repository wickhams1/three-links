import Joi from 'joi';

import ResponseMetaPaginated from './ResponseMetaPaginated.js';

const ResponseLinksList = (LinkModel, type) => (Joi.object({
    data: Joi.object({
        links: Joi.array().items(LinkModel).label('ResponseLinksListDataLinks' + (type ? '_' + type : ''))
    }).label('ResponseLinksListData' + (type ? '_' + type : '')),
    meta: ResponseMetaPaginated()
}).label('ResponseLinksList')
);

export default ResponseLinksList;