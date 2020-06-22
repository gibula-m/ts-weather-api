import {Request, Response} from 'express';
import {Payment} from '../types/Payment';
import {ResponseWrapper} from '../types/Response';
import {HttpError} from '../errors/HttpError';
import * as RMQManager from '../libs/Rabbit';


export const getIndex = async (req : Request, res : Response)=>{
  RMQManager.get('payments');
  res.status(200).end();
};

export const postIndex = (req : Request, res : Response) => {
  const incomingData : Payment = req.body;

  if (!incomingData.id) {
    throw new HttpError(400, 'Payment ID is necessary');
  }

  RMQManager.queue('payments',JSON.stringify(incomingData));

  const response : ResponseWrapper = {
    status: 200,
    message: 'Great!',
    incomingData: incomingData,
  };

  res.send(response);
};
