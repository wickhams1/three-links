
import RequestUserId from '../../../routes-models/RequestUserId.js';
import RequestShowsLink from '../../../routes-models/RequestShowsLink.js';
import ResponseShowsLink from '../../../routes-models/ResponseShowsLink.js';
import ResponseLinksList from '../../../routes-models/ResponseLinksList.js';
import PaginationQuery from '../../../routes-models/RequestPaginationQuery.js';

import * as showsLinks from '../../../services/showsLinks.js';

const path = '/{userId}/links/shows';

const get = () => ({
    method: 'GET',
    path,
    options: {
        description: 'Retrieve the shows links for the user',
        tags: ['api'],
        validate: {
            params: RequestUserId(),
            query: PaginationQuery()
        },
        response: {
            status: {
                200: ResponseLinksList(ResponseShowsLink())
            }
        }
    },
    handler: (request, h) => {

        return showsLinks.getListForUser(request.params.userId, {
            page: request.query.page,
            pageSize: request.query['page-size']
        });
    }
});


const post = () => ({
    method: 'POST',
    path,
    options: {
        description: 'Create a shows link for the user',
        tags: ['api'],
        validate: {
            params: RequestUserId(),
            payload: RequestShowsLink()
        },
        response: {
            status: {
                201: ResponseShowsLink()
            }
        }
    },
    handler: (request, h) => {

        const createdShowsLink = showsLinks.create({
            ...request.payload,
            userId: request.params.userId
        });

        // Return 201 with the classic link
        return h
            .response(createdShowsLink)
            .code(201);
    },
});

// TODO: Update and delete
// TODO: Additional endpoints for managing music platforms

export {
    get,
    post
};
