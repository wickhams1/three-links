import { getClassicLinks } from './links/classic.js';

const routes = {
    name: 'registerRoutes',
    register: async (server, options) => {

        // Create a route for example

        server.route(getClassicLinks);
    }
};

export default routes;