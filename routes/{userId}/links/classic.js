
import RequestUserId from '../../../routes-models/RequestUserId.js';
import RequestClassicLink from '../../../routes-models/RequestClassicLink.js';
import ResponseClassicLink from '../../../routes-models/ResponseClassicLink.js';
import ResponseLinksList from '../../../routes-models/ResponseLinksList.js';
import PaginationQuery from '../../../routes-models/RequestPaginationQuery.js';

import * as classicLinks from '../../../services/classicLinks.js';

const path = '/{userId}/links/classic';

const get = () => ({
    method: 'GET',
    path,
    options: {
        description: 'Retrieve the classic links for the user',
        tags: ['api'],
        validate: {
            params: RequestUserId(),
            query: PaginationQuery()
        },
        response: {
            status: {
                200: ResponseLinksList(ResponseClassicLink())
            }
        }
    },
    handler: (request, h) => {

        return classicLinks.getListForUser(request.params.userId, {
            page: request.query.page,
            pageSize: request.query['page-size']
        });
    }
});


const post = () => ({
    method: 'POST',
    path,
    options: {
        description: 'Create a classic link for the user',
        tags: ['api'],
        validate: {
            params: RequestUserId(),
            payload: RequestClassicLink()
        },
        response: {
            status: {
                201: ResponseClassicLink()
            }
        }
    },
    handler: (request, h) => {

        const createdClassicLink = classicLinks.create({
            ...request.payload,
            userId: request.params.userId
        });

        // Return 201 with the classic link
        return h
            .response(createdClassicLink)
            .code(201);
    },
});

// TODO: Update and delete

export {
    get,
    post
};
