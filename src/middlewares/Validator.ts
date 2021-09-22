import Joi from 'joi';
import _ from 'lodash';
import createHttpError from 'http-errors';

const Validator = {
    validate: (schema: any) => (req: any, res: any, next: any) => {
        const validSchema = _.pick(schema, ['params', 'query', 'body']);
        const toBeValidated = _.pick(req, _.keys(validSchema));

        const { error } = Joi.compile(validSchema)
            .prefs({ errors: { label: 'key' }, abortEarly: false })
            .validate(toBeValidated);

        if (error) {
            throw createHttpError(400, 'Invalid request.');
        }

        next();
    }
};

export default Validator;
