import * as messageService from '../services/messageService';

export const sendMessage = (req: any, res: any) => {
    const response = messageService.getResponse(req.body.message);

    res.json({
        response_id: req.body.conversation_id,
        response
    });
};
