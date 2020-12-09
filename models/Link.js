const Link = class {
    title;
    url;
    userId;
    dateCreated = (new Date()).toISOString();

    constructor({ title, url, userId }) {
        this.title = title;
        this.url = url;
        this.userId = userId;
    }
};

export default Link;