import ResponseMessages from '../constants/ResponseMessages';
import LookupUtil from '../util/LookupUtil';
import ContextTable from '../constants/ContextTable';

const MessageService = {
    getResponse: (message: string) => {
        const words: string[] = message.split(/[ ,.!?]+/);

        let response: string = ResponseMessages.NO_CONTEXT;
        let currentResponse: any;
        for (const word of words) {
            currentResponse = LookupUtil.lookup(word.toLowerCase(), ContextTable);
            if (currentResponse) {
                response = currentResponse;
                break;
            }
        }

        return response;
    }
}

export default MessageService;
