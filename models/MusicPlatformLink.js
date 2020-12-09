import UrlLink from './UrlLink.js';

const MusicPlatformLink = class extends UrlLink {
    platformName;
    musicLinkId;

    // URL would be link to the song hosted on the platform
    constructor({ musicLinkId, userId, url, platformName }) {
        super({ userId, url });

        this.musicLinkId = musicLinkId;
        this.platformName = platformName;
    }
};

export default MusicPlatformLink;