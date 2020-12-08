const getClassicLinks = {
    method: 'GET',
    path: '/links/classic',
    handler: (request, h) => {

        return 'Hello World!';
    }
};

export { getClassicLinks };
