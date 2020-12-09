import Joi from 'joi';

import RequestLink from './RequestLink.js';

const ResponseLink = () => RequestLink().keys({
    userId: Joi.string().required(),
    type: Joi.string().required(),
    dateCreated: Joi.string().isoDate(),
    linkId: Joi.string()
}).label('ResponseLink').options({ stripUnknown: { arrays: true, objects: true } });

export default ResponseLink;