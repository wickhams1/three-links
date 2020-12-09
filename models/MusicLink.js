import Link from './Link.js';
import MusicPlatformLink from './MusicPlatformLink.js';

const MusicLink = class extends Link {
    type = 'music';

    platforms = [];
    songName;
    artistName;

    constructor({ userId, songName, artistName }) {
        super({ userId });
        this.songName = songName;
        this.artistName = artistName;
    };

    addPlatform({ platformName, url }) {
        const userId = this.userId;

        const platform = new MusicPlatformLink({
            userId,
            url,
            platformName
        });

        this.platforms.push(platform);

        return platform;
    }
};

export default MusicLink;