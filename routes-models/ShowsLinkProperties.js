import Joi from 'Joi';

import UrlProperty from './UrlProperty.js';

import showStatuses from '../config/showStatuses.json';

// Common to request and response
const showsLinkProperties = () => ({
    registeredShows: Joi.array().items(Joi.object({
        url: UrlProperty(),
        showDate: Joi.date(),
        venue: Joi.string(),
        status: Joi.string().valid(...showStatuses)
    }).label('ShowLink'))
});

export default showsLinkProperties;