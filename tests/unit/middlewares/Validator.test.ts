import Validator from '../../../src/middlewares/Validator';
import MessageValidations from '../../../src/validations/MessageValidations';
import createHttpError from "http-errors";

describe('Validator', () => {
    describe('validate()', () => {
        let req: any;
        let res: any;
        let next: any;

        beforeEach(() => {
            res = {};
            next = jest.fn();
        });

        it('should throw an error when parameters are missing', () => {
            req = {
                body: {}
            };

            expect(() => {
                Validator.validate(MessageValidations.sendMessage)(req, res, next);
            }).toThrowError(createHttpError(400, 'Invalid request.'));
        });

        it('should throw an error when parameters types are incorrect', () => {
            req = {
                body: {
                    conversation_id: null,
                    message: 89
                }
            };

            expect(() => {
                Validator.validate(MessageValidations.sendMessage)(req, res, next);
            }).toThrowError(createHttpError(400, 'Invalid request.'));
        });

        it('should call next when there are no validation errors', () => {
            req = {
                body: {
                    conversation_id: 'abc123',
                    message: 'Hello!'
                }
            };

            Validator.validate(MessageValidations.sendMessage)(req, res, next);

            expect(next.mock.calls.length).toBe(1);
            expect(next.mock.calls[0].length).toBe(0);
        });
    });
});
