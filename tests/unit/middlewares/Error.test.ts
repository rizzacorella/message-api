import Error from '../../../src/middlewares/Error';
import createHttpError from 'http-errors';

describe('Error', () => {
    describe('handleNotFound()', () => {
        test('should call next with a 404 HTTP error', () => {
            const req: any = {};
            const res: any = {};
            const next: any = jest.fn();

            Error.handleNotFound(req, res, next);

            expect(next.mock.calls.length).toBe(1);
            expect(next.mock.calls[0][0]).toMatchObject(createHttpError(404, 'Endpoint not found'));
        });
    });

    describe('handleError()', () => {
        let error: any;
        let req: any;
        let res: any;

        beforeEach(() => {
            req = {};
            res = {
                status: jest.fn(),
                json: jest.fn()
            };
        });

        test('should call res.status and res.json when both status and message are provided', () => {
            error = {
                status: 404,
                message: 'Endpoint not found'
            };

            Error.handleError(error, req, res);

            expect(res.status.mock.calls.length).toBe(1);
            expect(res.status.mock.calls[0][0]).toBe(404);
            expect(res.json.mock.calls.length).toBe(1);
            expect(res.json.mock.calls[0][0]).toMatchObject({
                status: 404,
                message: 'Endpoint not found'
            });
        });

        test('should call res.status and res.json when status is not provided', () => {
            error = {};

            Error.handleError(error, req, res);

            expect(res.status.mock.calls.length).toBe(1);
            expect(res.status.mock.calls[0][0]).toBe(500);
            expect(res.json.mock.calls.length).toBe(1);
            expect(res.json.mock.calls[0][0]).toMatchObject({
                status: 500,
                message: 'Something went wrong.'
            });
        });
    });
});
