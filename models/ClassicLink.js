import UrlLink from './UrlLink.js';

const ClassicLink = class extends UrlLink {
    type = 'classic';
    title;

    constructor({ userId, url, title }) {
        super({ userId, url });

        this.title = title;
    }
};

export default ClassicLink;