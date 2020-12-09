import Joi from 'joi';

import linkTypes from '../config/linkTypes.json';

import ResponseLink from './ResponseLink.js';

const type = linkTypes.music;

const ResponseMusicLink = () => ResponseLink(type).keys({
    type: Joi.string().required().valid(type)
}).label('ResponseMusicLink');

export default ResponseMusicLink;