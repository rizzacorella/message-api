import Joi from 'joi';

const MessageValidations = {
    sendMessage: {
        body: Joi.object().keys({
            conversation_id: Joi.string().required(),
            message: Joi.string().required()
        })
    }
};

export default MessageValidations;
