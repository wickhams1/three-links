import Hapi from '@hapi/hapi';

const init = async () => {

    // TODO: Externalise to env variables
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

// Exit for unhandled promise rejections
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();