import MessageService from '../services/MessageService';

const MessageController = {
    sendMessage: (req: any, res: any) => {
        const response = MessageService.getResponse(req.body.message);

        res.json({
            response_id: req.body.conversation_id,
            response
        });
    }
};

export default MessageController;
