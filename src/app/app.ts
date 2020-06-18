import express from 'express';
import * as dotenv from 'dotenv';
import * as homeController from '../controllers/homeController';
import * as bodyParser from 'body-parser';
import { errorHandler } from '../middleware/Errors';
import { Request,Response,NextFunction } from 'express';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/',homeController.getIndex);
app.post('/',homeController.postIndex);

app.use((err : Error, req : Request, res : Response, next : NextFunction) => {
  errorHandler(err, res);
});

app.listen(process.env.PORT, () => console.log('App is avaliable on port : ' + process.env.PORT));
