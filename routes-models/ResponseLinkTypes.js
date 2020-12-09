import Joi from 'joi';

import MusicLinkProperties from './MusicLinkProperties.js';
import ClassicLinkProperties from './ClassicLinkProperties.js';
import ShowsLinkProperties from './ShowsLinkProperties.js';

const responseLinkTypes = (allowType) => {
    const types = {
        classic: Joi.object(ClassicLinkProperties()),
        music: Joi.object(MusicLinkProperties()),
        shows: Joi.object(ShowsLinkProperties()),
    };

    if (allowType) {
        //Remove objects in response schema that are not the requested type
        Object.keys(types).forEach(type => {
            if (allowType != type) {
                types[type] = types[type].forbidden()
            }
        });
    }

    return types;
};

export default responseLinkTypes;