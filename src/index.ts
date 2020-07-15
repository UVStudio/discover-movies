import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

app.listen(5000, () => {
  console.log('Listening to port 5000');
});
