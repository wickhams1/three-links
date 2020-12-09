import Hapi from '@hapi/hapi';

import plugins from './config/plugins.js';
import requestValidationFailAction from './utils/requestValidationFailAction.js';

const init = async () => {

    // TODO: Externalise to env variables
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            validate: {
                failAction: requestValidationFailAction
            }
        }
    });

    await server.register(
        plugins
    );

    await server.start();
};

// Exit for unhandled promise rejections
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();