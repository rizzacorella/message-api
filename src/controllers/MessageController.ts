import MessageService from '../services/MessageService';
import Logger from "../util/Logger";

const MessageController = {
    sendMessage: (req: any, res: any) => {
        const response = MessageService.getResponse(req.body.message);

        const jsonResponse = {
            response_id: req.body.conversation_id,
            response
        };

        Logger.info(`Responding with ${JSON.stringify(jsonResponse)}`);

        res.json(jsonResponse);
    }
};

export default MessageController;
