import Joi from 'joi';

const RequestLink = Joi.object({
    title: Joi.string(),
    url: Joi.string().uri().required()
}).label('RequestLink');

export default RequestLink;