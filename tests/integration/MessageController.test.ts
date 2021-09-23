import request from 'supertest';
import app from '../../src/app';
import ResponseMessages from '../../src/constants/ResponseMessages';

describe('POST /messages', () => {
    test('should return the correct response when message contains \'hello\'', async () => {
        const req = {
            'conversation_id': 'abcd1234',
            'message': 'Hello!'
        };

        const res: any = await request(app)
            .post('/messages')
            .send(req)
            .expect(200);

        expect(res.body).toMatchObject({
            response_id: req.conversation_id,
            response: ResponseMessages.WELCOME
        });
    });

    test('should return the correct response when message contains \'hi\'', async () => {
        const req = {
            'conversation_id': 'abcd1234',
            'message': 'Hi, how are you?'
        };

        const res: any = await request(app)
            .post('/messages')
            .send(req)
            .expect(200);

        expect(res.body).toMatchObject({
            response_id: req.conversation_id,
            response: ResponseMessages.WELCOME
        });
    });

    test('should return the correct response when message contains \'goodbye\'', async () => {
        const req = {
            'conversation_id': 'abcd1234',
            'message': 'Goodbye and say hello to your mom for me!'
        };

        const res: any = await request(app)
            .post('/messages')
            .send(req)
            .expect(200);

        expect(res.body).toMatchObject({
            response_id: req.conversation_id,
            response: ResponseMessages.GOODBYE
        });
    });

    test('should return the correct response when message contains \'bye\'', async () => {
        const req = {
            'conversation_id': 'abcd1234',
            'message': 'Bye and say hello to your mom for me!'
        };

        const res: any = await request(app)
            .post('/messages')
            .send(req)
            .expect(200);

        expect(res.body).toMatchObject({
            response_id: req.conversation_id,
            response: ResponseMessages.GOODBYE
        });
    });

    test('should return the correct response when message does not contain anything from context table', async () => {
        const req = {
            'conversation_id': 'abcd1234',
            'message': 'You will never understand.'
        };

        const res: any = await request(app)
            .post('/messages')
            .send(req)
            .expect(200);

        expect(res.body).toMatchObject({
            response_id: req.conversation_id,
            response: ResponseMessages.NO_CONTEXT
        });
    });

    test('should return an error response when there are missing values in the request', async () => {
        const req = {};

        await request(app)
            .post('/messages')
            .send(req)
            .expect(400);
    });

    test('should return an error response when there are incorrect types in the request', async () => {
        const req = {
            conversation_id: null,
            message: 89
        };

        await request(app)
            .post('/messages')
            .send(req)
            .expect(400);
    });
});
