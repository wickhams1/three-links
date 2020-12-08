import * as classicLinks from './{userId}/links/classic.js';

const routes = () => ({
    name: 'registerRoutes',
    register: async (server, options) => {

        server.route(classicLinks.get());
        server.route(classicLinks.post());
    }
});

export default routes;