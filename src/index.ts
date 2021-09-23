import app from './app';
import Logger from './util/Logger';

const PORT = 4000;

app.listen(PORT, () => {
    Logger.info(`Server running on port ${PORT}`);
});
