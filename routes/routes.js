import { getClassicLinks, createClassicLink } from './links/classic.js';

const routes = {
    name: 'registerRoutes',
    register: async (server, options) => {

        // Create a route for example

        server.route(getClassicLinks);
        server.route(createClassicLink);
    }
};

export default routes;