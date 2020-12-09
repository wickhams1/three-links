import Joi from 'joi';

import RequestLink from './RequestLink.js';
import responseLinkTypes from './ResponseLinkTypes.js';

const ResponseLink = (type) => RequestLink().keys({
    userId: Joi.string().required(),
    type: Joi.string().required(),
    dateCreated: Joi.string().isoDate(),
    linkId: Joi.string(),
    ...responseLinkTypes(type)
}).label('ResponseLink').options({ stripUnknown: { arrays: true, objects: true } });

export default ResponseLink;