import UrlLink from './UrlLink.js';

const MusicPlatformLink = class extends UrlLink {
    type = "musicPlatform";

    platformName;
    musicLinkId;

    // URL would be link to the song hosted on the platform
    constructor({ userId, url, platformName }) {
        super({ userId, url });

        this.platformName = platformName;
    }
};

export default MusicPlatformLink;