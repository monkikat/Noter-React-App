import * as express from 'express';
import { PORT } from './utils/config';

const app = express();
app.use(express.json());

app.use('/api/notebooks', require('./routes/notebookRoutes'));

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
