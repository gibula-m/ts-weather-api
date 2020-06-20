import express from 'express';
import * as homeController from '../controllers/homeController';
import * as bodyParser from 'body-parser';
import {errorHandler} from '../middleware/Errors';
import {Request, Response, NextFunction} from 'express';
import {rabbitInitializer} from '../middleware/Rabbit';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(rabbitInitializer);

app.get('/', homeController.getIndex);
app.post('/', homeController.postIndex);

app.use((err : Error, req : Request, res : Response, next : NextFunction) => {
  errorHandler(err, res);
});

app.listen(process.env.PORT);
