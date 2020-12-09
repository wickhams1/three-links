
import boom from '@hapi/boom';

const requestValidationFailAction = async (request, h, err) => {
    if (err.isBoom && !err.isServer) {
        const errorMessages = err.details.map(
            detail =>
                err.output.payload.validation.source
                + ' validation error: '
                + detail.message
        );
        return new boom.badRequest(errorMessages);
    }
};

export default requestValidationFailAction;