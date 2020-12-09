import Joi from 'Joi';

import UrlProperty from './UrlProperty.js';

// Common to request and response
const classicLinkProperties = () => ({
    title: Joi.string(),
    url: UrlProperty()
});

export default classicLinkProperties;