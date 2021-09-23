import LookupTable from '../types/LookupTable';

const LookupUtil = {
    lookup: (word: string, table: LookupTable) => {
        const lowerCased: string = word.toLowerCase();

        if (lowerCased in table) {
            return table[lowerCased];
        }

        return null;
    }
}

export default LookupUtil;
