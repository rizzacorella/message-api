import LookupUtil from '../../../src/util/LookupUtil';
import LookupTable from '../../../src/types/LookupTable';

describe('LookupUtil', () => {
    describe('lookup()', () => {
        test('should return null when word is not in table', () => {
            const word: string = 'invalid';
            const table: LookupTable = {
                'hello': 'How are you?'
            };

            expect(LookupUtil.lookup(word, table)).toBeNull();
        });

        test('should return the correct value when word is in table exactly', () => {
            const word: string = 'hello';
            const table: LookupTable = {
                'hello': 'How are you?'
            };

            expect(LookupUtil.lookup(word, table)).toBe('How are you?');
        });

        test('should return the correct value when word is in table when lowercased', () => {
            const word: string = 'HeLLo';
            const table: LookupTable = {
                'hello': 'How are you?'
            };

            expect(LookupUtil.lookup(word, table)).toBe('How are you?');
        });
    });
});
