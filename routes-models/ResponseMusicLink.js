import Joi from 'joi';

import MusicLinkProperties from './MusicLinkProperties.js';
import ResponseLink from './ResponseLink.js';

const ResponseMusicLink = () => ResponseLink().keys({
    ...MusicLinkProperties(),
    type: Joi.string().required().default('music')
}).label('ResponseMusicLink');

export default ResponseMusicLink;