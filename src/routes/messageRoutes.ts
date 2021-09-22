import express from 'express';
import * as messageController from '../controllers/messageController';
import * as messageValidations from '../validations/messageValidations';
import { validate } from '../middlewares/validate';

const router = express.Router();

router
    .route('/messages')
    .post(
        validate(messageValidations.sendMessage),
        messageController.sendMessage
    );

export default router;
