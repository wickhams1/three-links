import Link from './Link.js';

const UrlLink = class extends Link {
    url;

    constructor({ url, userId }) {
        super({ userId });
        this.url = url;
    }
};

export default UrlLink;