const MusicPlatformLink = class {
    url;
    platformName;

    // URL would be link to the song hosted on the platform
    constructor({ url, platformName }) {
        this.url = url;
        this.platformName = platformName;
    }
};

export default MusicPlatformLink;