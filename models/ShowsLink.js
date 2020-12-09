import Link from './Link.js';
import ShowLink from './ShowLink.js';

const ShowsLink = class extends Link {
    type = 'shows';

    shows = [];

    constructor({ userId, shows = [] }) {
        super({ userId });

        shows.forEach(show => this.addShow(show));
    };

    // These can be saved as an additional entity, with a link to this parent ShowsLink (by the ShowsLink linkId)
    addShow({ showDate, venue, status, url }) {
        const userId = this.userId;

        const show = new ShowLink({
            userId,
            showDate,
            venue,
            status,
            url
        });

        this.shows.push(show);

        return show;
    }
};

export default ShowsLink;