import createHttpError from 'http-errors';

export const handleNotFound = (req: any, res: any, next: any) => {
    next(createHttpError(404, 'Endpoint not found'));
};

export const handleError = (error: any, req: any, res: any, next: any) => {
    if (error) {
        const status = error.status || 500;

        res.status(status);
        res.json({
            status,
            messages: error.message || 'Something went wrong.'
        });
    }
};
