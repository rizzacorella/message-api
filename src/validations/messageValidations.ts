import Joi from 'joi';

export const sendMessage = {
    body: Joi.object().keys({
        conversation_id: Joi.string().required(),
        message: Joi.string().required()
    })
}
