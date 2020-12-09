import * as classicLinks from './{userId}/links/classic.js';
import * as musicLinks from './{userId}/links/music.js';
import * as showsLinks from './{userId}/links/shows.js';


const routes = () => ({
    name: 'registerRoutes',
    register: async (server, options) => {

        server.route(classicLinks.get());
        server.route(classicLinks.post());
        server.route(musicLinks.get());
        server.route(musicLinks.post());
        server.route(showsLinks.get());
        server.route(showsLinks.post());
    }
});

export default routes;