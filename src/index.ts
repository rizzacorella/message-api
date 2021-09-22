import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import routes from './routes/messageRoutes';
import { handleError, handleNotFound } from './middlewares/error';

const app = express();
const PORT = 4000;

app.use(helmet());
app.use(bodyParser.json());
app.use('/', routes);
app.use(handleNotFound);
app.use(handleError);

app.listen(PORT, () => {
    // log message
});
