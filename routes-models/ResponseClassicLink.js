import Joi from 'joi';

import ResponseLink from './ResponseLink.js';
import ClassicLinkProperties from './ClassicLinkProperties.js';

const ResponseClassicLink = () => ResponseLink().keys({
    ...ClassicLinkProperties(),
    type: Joi.string().required().default('classic')
}).label('ResponseClassicLink');

export default ResponseClassicLink;