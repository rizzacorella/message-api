import MessageService from '../../../src/services/MessageService';
import ResponseMessages from '../../../src/constants/ResponseMessages';

describe('MessageService', () => {
    describe('getResponse()', () => {
        test('should return default message when message can\'t be found in table', () => {
            const message: string = 'What\'s up?';

            expect(MessageService.getResponse(message)).toBe(ResponseMessages.NO_CONTEXT);
        });

        test('should return the correct message when \'hello\' is in the message', () => {
            const message: string = 'Hello! How are you doing?';

            expect(MessageService.getResponse(message)).toBe(ResponseMessages.WELCOME);
        });

        test('should return the correct message when \'hi\' is in the message', () => {
            const message: string = 'Hi! How are you doing?';

            expect(MessageService.getResponse(message)).toBe(ResponseMessages.WELCOME);
        });

        test('should return the correct message when \'goodbye\' is in the message', () => {
            const message: string = 'Goodbye and good luck!';

            expect(MessageService.getResponse(message)).toBe(ResponseMessages.GOODBYE);
        });

        test('should return the correct message when \'bye\' is in the message', () => {
            const message: string = 'Bye bye bye.';

            expect(MessageService.getResponse(message)).toBe(ResponseMessages.GOODBYE);
        });

        test('should return the correct message when both \'hello\' and \'goodbye\' are in the message', () => {
            const message: string = 'Hello and goodbye.';

            expect(MessageService.getResponse(message)).toBe(ResponseMessages.WELCOME);
        });
    });
});
