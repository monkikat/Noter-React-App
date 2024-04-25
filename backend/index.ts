import * as express from 'express';
import { PORT } from './utils/config';
import { errorHandler } from './middleware/errorMiddleware';
import { connectDB } from './database/db';

connectDB();

const app = express();
app.use(express.json());

app.use('/api/notebooks', require('./routes/notebookRoutes'));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
