import express from 'express';
import MessageController from '../controllers/MessageController';
import MessageValidations from '../validations/MessageValidations';
import Validator from '../middlewares/Validator';

const messageRoutes = express.Router();

messageRoutes
    .route('/messages')
    .post(
        Validator.validate(MessageValidations.sendMessage),
        MessageController.sendMessage
    );

export default messageRoutes;
