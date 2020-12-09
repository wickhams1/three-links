import ShowsLink from '../models/ShowsLink.js';

import paginationDefaults from '../config/paginationDefaults.json';
import linkTypes from '../config/linkTypes.json';

// Currently used to store data (runtime only)
import links from '../links.js';

import sortLinks from '../utils/sortLinks.js';

// Create and store a classic link
const create = (showsLinkData) => {

    // Validation could be done on whether the title must be unique for the user, etc
    // This would be done more easily by using a proper persistence layer, and the utilities that would come from the ORM
    const showsLink = new ShowsLink(showsLinkData);

    links.push(showsLink);

    console.log(showsLink);

    return showsLink;
};


const getListForUser = (userId, { page = paginationDefaults.page, pageSize = paginationDefaults["page-size"] }) => {

    // Find all links for the user
    const linksForUser = links.filter(link => link.userId == userId && link.type === linkTypes.shows);

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

export { create, getListForUser };