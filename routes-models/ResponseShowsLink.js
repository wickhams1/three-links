import Joi from 'joi';

import ShowsLinkProperties from './ShowsLinkProperties.js';
import ResponseLink from './ResponseLink.js';

import linkTypes from '../config/linkTypes.json';

const type = linkTypes.shows;

const ResponseShowsLink = () => ResponseLink(type).keys({
    type: Joi.string().required().valid(type)
}).label('ResponseShowsLink');

export default ResponseShowsLink;