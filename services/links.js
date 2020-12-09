import paginationDefaults from '../config/paginationDefaults.json';

// Currently used to store data (runtime only)
import links from '../links.js';

import sortLinks from '../utils/sortLinks.js';

const getListForUser = (userId, { page = paginationDefaults.page, pageSize = paginationDefaults["page-size"] }) => {

    // Find all classic links for the user
    const linksForUser = links.filter(link => link.userId == userId);

    return {
        data: {
            links: linksForUser
                .sort(sortLinks)
                .slice((page - 1) * pageSize, page * pageSize)
        },
        meta: {
            totalRecords: linksForUser.length,
            totalPages: Math.ceil(linksForUser.length / pageSize)
        }
    };
}

export { getListForUser };