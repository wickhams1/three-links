import Joi from 'Joi';

// Common to request and response
const musicLinkProperties = () => ({
    songName: Joi.string(),
    artistName: Joi.string()
});

export default musicLinkProperties;