
import RequestUserId from '../../../routes-models/RequestUserId.js';
import RequestLink from '../../../routes-models/RequestLink.js';
import ResponseLink from '../../../routes-models/ResponseLink.js';
import ResponseLinksList from '../../../routes-models/ResponseLinksList.js';

const path = '/{userId}/links/classic';

const links = [];


const get = () => ({
    method: 'GET',
    path,
    options: {
        description: 'Retrieve the classic links for the user',
        tags: ['api'],
        validate: {
            params: RequestUserId
        },
        response: {
            status: {
                200: ResponseLinksList
            }
        }
    },
    handler: (request, h) => {

        return {
            data: {
                links
            }
        };
    }
});

const post = () => ({
    method: 'POST',
    path,
    options: {
        description: 'Create a classic link for the user',
        tags: ['api'],
        validate: {
            params: RequestUserId,
            payload: RequestLink
        },
        response: {
            status: {
                201: ResponseLink
            }
        }
    },
    handler: (request, h) => {
        const newLink = {
            ...request.payload,
            dateCreated: Date.now()
        };

        links.push(newLink);

        return h
            .response(newLink)
            .code(201);
    },
});

// TODO: Update and delete

export {
    get,
    post
};
