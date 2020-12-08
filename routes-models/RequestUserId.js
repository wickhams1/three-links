import Joi from 'joi';

const RequestUserId = Joi.object({
    userId: Joi.string().required(),
}).label('RequestUserId');

export default RequestUserId;