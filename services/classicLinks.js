import ClassicLink from '../models/ClassicLink.js';

import paginationDefaults from '../config/paginationDefaults.json';

// Currently used to store data (runtime only)
import links from '../links.js';

import sortLinks from '../utils/sortLinks.js';


// Create and store a classic link
const create = (classicLinkData) => {

    // Validation could be done on whether the title must be unique for the user, etc
    // This would be done more easily by using a proper persistence layer, and the utilities that would come from the ORM
    const classicLink = new ClassicLink(classicLinkData);

    links.push(classicLink);

    return classicLink;
};


const getListForUser = (userId, { page = paginationDefaults.page, pageSize = paginationDefaults["page-size"] }) => {

    // Find all classic links for the user
    const linksForUser = links.filter(link => link.userId == userId && link.type === "classic");

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