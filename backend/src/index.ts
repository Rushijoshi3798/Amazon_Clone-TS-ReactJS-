import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { productRouter } from './routers/productRouter';
import { seedRouter } from './routers/seedRouter';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/apni_dukan'
mongoose.set("strictQuery", true)

mongoose.connect(MONGODB_URI).then(() => {
    console.log('connected to mongoDB');
})
    .catch(() => {
        console.log('error mongoDB');
    })

const app = express();
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
    })
)

app.use('/api/products', productRouter)
app.use('/api/seed', seedRouter)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost: ${PORT}`);
})