console.log('hi monki :)');

import express from 'express';
//import { mongoDBURL } from './config';
//import mongoose from 'mongoose';
import { PORT } from './utils/config';

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
