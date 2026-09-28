import dotenv from 'dotenv';
import express from 'express';
import type { Request, Response } from 'express';

// import router from './routes';

dotenv.config();

const app = express();

// app.use(express.json());
// app.use(router);

const port = process.env.PORT || 3000;

//  Could return api key process.env.OPENAI_API_KEY

app.get('/', (req: Request, res: Response) => {
   res.send('Hello World!');
});

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});


app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});