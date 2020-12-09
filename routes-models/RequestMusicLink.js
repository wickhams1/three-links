
import RequestLink from './RequestLink.js';
import MusicLinkProperties from './MusicLinkProperties.js';

const RequestMusicLink = () => RequestLink().keys({
    ...(MusicLinkProperties())
}).label('RequestMusicLink');

export default RequestMusicLink;