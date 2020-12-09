import Joi from 'joi';

import RequestLink from './RequestLink.js';
import responseLinkTypes from './ResponseLinkTypes.js';

import linkTypes from '../config/linkTypes.json';

const ResponseLink = (type) => RequestLink().keys({
    userId: Joi.string().required(),
    type: Joi.string().required().valid(...Object.keys(linkTypes).map(key => linkTypes[key])),
    dateCreated: Joi.string().isoDate(),
    linkId: Joi.string(),
    ...responseLinkTypes(type)
}).label('ResponseLink').options({ stripUnknown: { arrays: true, objects: true } });

export default ResponseLink;