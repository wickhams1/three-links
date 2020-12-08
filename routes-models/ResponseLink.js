import Joi from 'joi';

const ResponseLink = Joi.object({
    title: Joi.string(),
    url: Joi.string().uri(),
    dateCreated: Joi.date()
}).label('ResponseLink');

export default ResponseLink;