import * as classicLinks from './{userId}/links/classic.js';
import * as musicLinks from './{userId}/links/music.js';
import * as showsLinks from './{userId}/links/shows.js';
import * as links from './{userId}/links.js';

// TODO: take the userId from the path. Have it be embedded or linked from within an authorisation JWT instead.

const routes = () => ({
    name: 'registerRoutes',
    register: async (server, options) => {

        server.route(links.get());
        server.route(classicLinks.post());
        server.route(classicLinks.get());
        server.route(musicLinks.post());
        server.route(musicLinks.get());
        server.route(showsLinks.post());
        server.route(showsLinks.get());
    }
});

export default routes;