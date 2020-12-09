
import RequestUserId from '../../routes-models/RequestUserId.js';
import Link from '../../routes-models/ResponseLink.js';
import ResponseLinksList from '../../routes-models/ResponseLinksList.js';
import PaginationQuery from '../../routes-models/RequestPaginationQuery.js';

import * as links from '../../services/links.js';

const path = '/{userId}/links';

const get = () => ({
    method: 'GET',
    path,
    options: {
        description: 'Retrieve all links for the user',
        tags: ['api'],
        validate: {
            params: RequestUserId(),
            query: PaginationQuery()
        },
        response: {
            status: {
                200: ResponseLinksList(Link())
            }
        }
    },
    handler: (request, h) => {

        return links.getListForUser(request.params.userId, {
            page: request.query.page,
            pageSize: request.query['page-size']
        });
    }
});

export {
    get
};
