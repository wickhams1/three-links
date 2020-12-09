import UrlLink from './UrlLink.js';

const ShowLink = class extends UrlLink {
    type = 'show';

    parentShowsLinkId;
    showDate;
    venue;
    status;
    url;

    constructor({ userId, showDate, venue, status, url }) {
        super({ userId, url });

        // TODO: Rather than require the following fields, this information should be retrieved/scraped via the url
        this.showDate = showDate;
        this.venue = venue;
        this.status = status;
    };
};

export default ShowLink;