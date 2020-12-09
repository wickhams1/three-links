import createId from "../utils/createId.js";

const Link = class {
    linkId = createId(30);
    userId;
    dateCreated = (new Date()).toISOString();

    constructor({ userId }) {
        this.userId = userId;
    }
};

export default Link;