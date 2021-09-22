import LookupTable from '../types/LookupTable';
import ResponseMessages from './ResponseMessages';

const ContextTable: LookupTable = {
    'hello': ResponseMessages.WELCOME,
    'hi': ResponseMessages.WELCOME,
    'goodbye': ResponseMessages.GOODBYE,
    'bye': ResponseMessages.GOODBYE
};

export default ContextTable;
