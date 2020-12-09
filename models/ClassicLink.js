import Link from './Link.js';
import linkTypes from '../config/linkTypes.json';

const ClassicLink = class extends Link {
    type = linkTypes.classic;
    classic = {};

    constructor({ userId, url, title }) {
        super({ userId, url });

        this.classic.title = title;
        this.classic.url = url;
    }
};

export default ClassicLink;