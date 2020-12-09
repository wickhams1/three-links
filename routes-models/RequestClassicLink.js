
import RequestLink from './RequestLink.js';
import ClassicLinkProperties from './ClassicLinkProperties.js';

const RequestClassicLink = () => RequestLink().keys({
    ...(ClassicLinkProperties())
}).label('RequestClassicLink');

export default RequestClassicLink;