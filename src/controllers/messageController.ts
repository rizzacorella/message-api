import messageService from '../services/messageService';

const messageController = {
    sendMessage: (req: any, res: any) => {
        const response = messageService.getResponse(req.body.message);

        res.json({
            response_id: req.body.conversation_id,
            response
        });
    }
};

export default messageController;
