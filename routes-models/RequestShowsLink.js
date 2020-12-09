
import RequestLink from './RequestLink.js';
import ShowsLinkProperties from './ShowsLinkProperties.js';

const RequestShowsLink = () => RequestLink().keys({
    ...(ShowsLinkProperties())
}).label('RequestShowsLink');

export default RequestShowsLink;