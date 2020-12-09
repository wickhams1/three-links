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

    // These can be saved as an additional entity, with a link to this parent MusicLink (by the MusicLink linkId)
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