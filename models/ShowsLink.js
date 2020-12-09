import Link from './Link.js';
import RegisteredShow from './RegisteredShow.js';
import linkTypes from '../config/linkTypes.json';

const ShowsLink = class extends Link {
    type = linkTypes.shows;

    shows = {
        registeredShows: []
    };

    constructor({ userId, registeredShows = [] }) {
        super({ userId });

        registeredShows.forEach(registeredShows => this.addShow(registeredShows));
    };

    // RegisteredShow can be saved as an additional entity, with a link to this parent ShowsLink (by the ShowsLink linkId)
    addShow({ showDate, venue, status, url }) {

        const registeredShow = new RegisteredShow({
            showDate,
            venue,
            status,
            url
        });

        this.shows.registeredShows.push(registeredShow);

        return registeredShow;
    }
};

export default ShowsLink;