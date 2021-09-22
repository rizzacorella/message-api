import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import messageRoutes from './routes/messageRoutes';
import Error from './middlewares/Error';

const app = express();
const PORT = 4000;

app.use(helmet());
app.use(bodyParser.json());
app.use('/', messageRoutes);
app.use(Error.handleNotFound);
app.use(Error.handleError);

app.listen(PORT, () => {
    // log message
});
