import { mocked } from 'ts-jest/utils';
import Logger from '../../../src/util/Logger';
import RequestLogger from '../../../src/middlewares/RequestLogger';
import _ from "lodash";

jest.mock('../../../src/util/Logger', () => {
    return {
        info: jest.fn()
    }
});

describe('RequestLogger', () => {
    describe('log()', () => {
        const MockedLogger = mocked(Logger, true);

        test('should log method, URL, and request', () => {
            const req: any = {
                method: 'POST',
                originalUrl: '/messages',
                body: {
                    foo: 'bar'
                },
                headers: {
                    bar: 'foo'
                },
                query: {},
                params: {}
            };
            const res = {};
            const next = jest.fn();

            RequestLogger.log(req, res, next);

            expect(MockedLogger.info.mock.calls.length).toBe(2);
            expect(MockedLogger.info.mock.calls[0][0]).toBe(`${req.method} ${req.originalUrl}`);
            expect(MockedLogger.info.mock.calls[1][0]).toBe(`${JSON.stringify(_.pick(req, ['headers', 'query', 'body']))}`);
        });
    });
});
