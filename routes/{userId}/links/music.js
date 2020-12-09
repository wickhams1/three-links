
import RequestUserId from '../../../routes-models/RequestUserId.js';
import RequestMusicLink from '../../../routes-models/RequestMusicLink.js';
import ResponseMusicLink from '../../../routes-models/ResponseMusicLink.js';
import ResponseLinksList from '../../../routes-models/ResponseLinksList.js';
import PaginationQuery from '../../../routes-models/RequestPaginationQuery.js';

import * as musicLinks from '../../../services/musicLinks.js';

const path = '/{userId}/links/music';

const get = () => ({
    method: 'GET',
    path,
    options: {
        description: 'Retrieve the music links for the user',
        tags: ['api'],
        validate: {
            params: RequestUserId(),
            query: PaginationQuery()
        },
        response: {
            status: {
                200: ResponseLinksList(ResponseMusicLink())
            }
        }
    },
    handler: (request, h) => {

        return musicLinks.getListForUser(request.params.userId, {
            page: request.query.page,
            pageSize: request.query['page-size']
        });
    }
});


const post = () => ({
    method: 'POST',
    path,
    options: {
        description: 'Create a music link for the user',
        tags: ['api'],
        validate: {
            params: RequestUserId(),
            payload: RequestMusicLink()
        },
        response: {
            status: {
                201: ResponseMusicLink()
            }
        }
    },
    handler: (request, h) => {

        const createdMusicLink = musicLinks.create({
            ...request.payload,
            userId: request.params.userId
        });

        // Return 201 with the classic link
        return h
            .response(createdMusicLink)
            .code(201);
    },
});

// TODO: Update and delete
// TODO: Additional endpoints for managing music platforms

export {
    get,
    post
};
