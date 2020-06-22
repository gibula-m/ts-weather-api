import {Request, Response} from 'express';
import {Payment} from '../types/Payment';
import {ResponseWrapper} from '../types/Response';
import {HttpError} from '../errors/HttpError';
import * as RMQManager from '../libs/Rabbit';
import * as RedisManager from '../libs/Redis';

export const getIndex = async (req : Request, res : Response)=>{
  const msg = await RMQManager.get('payments');
  const cached = await RedisManager.get('payment');
  if (msg !== false && cached) {
    res.send("From queue : " + msg + " cached : " + cached);
  } else {
    throw new HttpError(400, 'Queue is empty');
  }
};

export const postIndex = (req : Request, res : Response) => {
  const incomingData : Payment = req.body;

  if (!incomingData.id) {
    throw new HttpError(400, 'Payment ID is necessary');
  }

  RMQManager.queue('payments', JSON.stringify(incomingData));
  RedisManager.set('payment', JSON.stringify(incomingData));

  const response : ResponseWrapper = {
    status: 200,
    message: 'Great!',
    incomingData: incomingData,
  };

  res.send(response);
};
