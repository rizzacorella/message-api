import express from 'express';
import messageController from '../controllers/messageController';
import messageValidations from '../validations/messageValidations';
import { validate } from '../middlewares/validate';

const router = express.Router();

router
    .route('/messages')
    .post(
        validate(messageValidations.sendMessage),
        messageController.sendMessage
    );

export default router;
