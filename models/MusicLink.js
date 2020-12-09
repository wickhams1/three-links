import Link from './Link.js';
import MusicPlatform from './MusicPlatform.js';
import linkTypes from '../config/linkTypes.json';

const MusicLink = class extends Link {
    type = linkTypes.music;
    music = {};

    constructor({ userId, songName, artistName, platforms = [] }) {
        super({ userId });
        this.music.songName = songName;
        this.music.artistName = artistName;
        this.music.platforms = [];

        platforms.forEach(platform => this.addPlatform(platform));
    };

    // MusicPlatformLinks could be saved as an additional entity, with a link to this parent MusicLink (by the MusicLink linkId)
    addPlatform({ platformName, url }) {

        const platform = new MusicPlatform({
            url,
            platformName
        });

        this.music.platforms.push(platform);

        return platform;
    }
};

export default MusicLink;