import Joi from 'joi';

const getClassicLinks = {
    method: 'GET',
    path: '/links/classic',
    options: {
        description: 'Retrieve the classic links for the authenticated user',
        tags: ['api']
    },
    handler: (request, h) => {

        return 'Hello World!';
    },
};

const createClassicLink = {
    method: 'POST',
    path: '/links/classic',
    options: {
        description: 'Create a classic link for the authenticated user',
        tags: ['api'],
        validate: {
            payload: Joi.object({
                post: Joi.string().min(1).max(140),
                date: Joi.date().required()
            })
        }
    },
    handler: (request, h) => {

        return request.payload;
    },
};

export {
    getClassicLinks,
    createClassicLink
};
