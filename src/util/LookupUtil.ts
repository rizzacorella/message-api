import LookupTable from '../types/LookupTable';

const LookupUtil = {
    lookup: (word: string, table: LookupTable) => {
        if (word in table) {
            return table[word];
        }

        return null;
    }
}

export default LookupUtil;
