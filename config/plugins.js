import pino from 'hapi-pino';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';

import hapiSwaggerOptions from './hapi-swagger-options.json';

import routes from '../routes/routes.js';

const plugins = [
    {
        plugin: routes()
    },
    {
        plugin: pino,
        options: {
            logRequestStart: true,
            logRequestEnd: true,
            prettyPrint: process.env.NODE_ENV == 'development',
        }
    },
    {
        plugin: Inert
    },
    {
        plugin: Vision
    },
    {
        plugin: HapiSwagger,
        options: hapiSwaggerOptions
    }
];

export default plugins;