import Logger from '../util/Logger';
import _ from 'lodash';

const RequestLogger = {
    log: (req: any, res: any, next: any) => {
        Logger.info(`${req.method} ${req.originalUrl}`);
        Logger.info(`${JSON.stringify(_.pick(req, ['headers', 'query', 'body']))}`);

        next();
    }
};

export default RequestLogger;