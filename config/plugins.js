import pino from 'hapi-pino';

import routes from '../routes/routes.js';

const plugins = [
    {
        plugin: routes
    },
    {
        plugin: pino,
        options: {
            logRequestStart: true,
            logRequestEnd: true,
            prettyPrint: process.env.NODE_ENV == 'development',
        }
    }
];

export default plugins;