import createHttpError from 'http-errors';

const Error = {
    handleNotFound: (req: any, res: any, next: any) => {
        next(createHttpError(404, 'Endpoint not found'));
    },
    handleError: (error: any, req: any, res: any) => {
        if (error) {
            const status = error.status || 500;

            res.status(status);
            res.json({
                status,
                message: status != 500 ? error.message : 'Something went wrong.'
            });
        }
    }
};

export default Error;
