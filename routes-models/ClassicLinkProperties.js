import Joi from 'Joi';

// Common to request and response
const classicLinkProperties = () => ({
    title: Joi.string(),
    url: Joi.string().uri().required()
});

export default classicLinkProperties;