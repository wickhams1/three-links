import Joi from 'joi';

const url = () => Joi.string().uri().required();

export default url;