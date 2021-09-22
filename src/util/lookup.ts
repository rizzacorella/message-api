import LookupTable from '../types/lookupTable';

const lookup = (word: string, table: LookupTable) => {
    if (word in table) {
        return table[word];
    }

    return null;
};

export default lookup;
