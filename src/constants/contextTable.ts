import LookupTable from '../types/lookupTable';
import messages from './responseMessages';

const contextTable: LookupTable = {
    'hello': messages.WELCOME,
    'hi': messages.WELCOME,
    'goodbye': messages.GOODBYE,
    'bye': messages.GOODBYE
};

export default contextTable;
