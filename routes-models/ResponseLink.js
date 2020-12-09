import Joi from 'joi';

import RequestLink from './RequestLink.js';

const ResponseLink = RequestLink.keys({
    userId: Joi.string().required(),
    type: Joi.string().required().valid('classic'),
    dateCreated: Joi.string().isoDate(),
}).label('ResponseLink');

export default ResponseLink;