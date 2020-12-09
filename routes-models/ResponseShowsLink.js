import Joi from 'joi';

import ShowsLinkProperties from './ShowsLinkProperties.js';
import ResponseLink from './ResponseLink.js';

const ResponseShowsLink = () => ResponseLink().keys({
    ...ShowsLinkProperties(),
    type: Joi.string().required().default('shows')
}).label('ResponseShowsLink');

export default ResponseShowsLink;