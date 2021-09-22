import messages from '../constants/responseMessages';
import lookup from '../util/lookup';
import contextTable from '../constants/contextTable';

const messageService = {
    getResponse: (message: string) => {
        const words: string[] = message.split(/[ ,.!?]+/);

        let response: string = messages.NO_CONTEXT;
        let currentResponse: any;
        for (const word of words) {
            currentResponse = lookup(word.toLowerCase(), contextTable);
            if (currentResponse) {
                response = currentResponse;
                break;
            }
        }

        return response;
    }
}

export default messageService;
