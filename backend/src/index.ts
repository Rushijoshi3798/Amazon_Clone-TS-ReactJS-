import express, { Request, Response } from 'express';
import { sampleProducts } from './data';
import cors from 'cors';

const app = express();
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
    })
)

app.get('/api/products', (req: Request, res: Response) => {
    res.json(sampleProducts)
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost: ${PORT}`);

})