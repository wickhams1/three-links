import Joi from 'joi';

import ResponseLink from './ResponseLink.js';

import linkTypes from '../config/linkTypes.json';

const type = linkTypes.classic;

const ResponseClassicLink = () => ResponseLink(type).keys({
    type: Joi.string().required().default(type)
}).label('ResponseClassicLink');

export default ResponseClassicLink;