import Joi from 'Joi';

import UrlProperty from './UrlProperty.js';

import musicPlatformNames from '../config/musicPlatformNames.json';

// Common to request and response
const musicLinkProperties = () => ({
    songName: Joi.string(),
    artistName: Joi.string(),
    platforms: Joi.array().items(Joi.object({
        url: UrlProperty(),
        platformName: Joi.string().valid(...musicPlatformNames)
    }).label('MusicPlatform'))
});

export default musicLinkProperties;