
const ShowLink = class {
    showDate;
    venue;
    status;
    url;

    constructor({ showDate, venue, status, url }) {

        // TODO: Rather than require the following fields, this information should be retrieved/scraped via the url
        this.showDate = showDate;
        this.venue = venue;
        this.status = status;
        this.status = status;
    };
};

export default ShowLink;