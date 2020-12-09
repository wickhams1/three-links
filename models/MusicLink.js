import Link from './Link.js';
import MusicPlatformLink from './MusicPlatformLink.js';

const MusicLink = class extends Link {
    type = 'music';

    platforms = [];
    songName;
    artistName;

    constructor({ userId, songName, artistName, platforms = [] }) {
        super({ userId });
        this.songName = songName;
        this.artistName = artistName;

        platforms.forEach(platform => this.addPlatform(platform));
    };

    addPlatform({ platformName, url }) {
        const userId = this.userId;
        const musicLinkId = this.linkId;

        const platform = new MusicPlatformLink({
            userId,
            musicLinkId,
            url,
            platformName
        });

        this.platforms.push(platform);

        return platform;
    }
};

export default MusicLink;