import MusicLink from '../models/MusicLink.js';

import paginationDefaults from '../config/paginationDefaults.json';

// Data just stored in array for now
// TODO: Change to persistent nosql db
const musicLinks = [];

// TODO: Music platforms can be separated into a separate service

// Create and store a classic link
const create = (musicLinkData) => {

    // Validation could be done on whether the title must be unique for the user, etc
    // This would be done more easily by using a proper persistence layer, and the utilities that would come from the ORM
    const musicLink = new MusicLink(musicLinkData);

    musicLinks.push(musicLink);

    return musicLink;
};


const getListForUser = (userId, { page = paginationDefaults.page, pageSize = paginationDefaults["page-size"] }) => {

    // Find all links for the user
    const linksForUser = musicLinks.filter(link => link.userId == userId);

    return {
        data: {
            links: linksForUser
                .sort((linkA, linkB) => {
                    // Sort on date created
                    // Sorting could be configured based on request parameters (e.g. different fields, asc/desc)
                    if (linkA.dateCreated < linkB.dateCreated) {
                        return -1;
                    } else if (linkA.dateCreated > linkB.dateCreated) {
                        return 1;
                    }
                })
                .slice((page - 1) * pageSize, page * pageSize)
        },
        meta: {
            totalRecords: linksForUser.length,
            totalPages: Math.ceil(linksForUser.length / pageSize)
        }
    };
}

export { create, getListForUser };