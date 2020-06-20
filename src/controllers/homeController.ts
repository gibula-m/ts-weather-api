import {Request, Response} from 'express';
import {Payment} from '../types/Payment';
import {ResponseWrapper} from '../types/Response';
import {HttpError} from '../errors/HttpError';


export const getIndex = (req : Request, res : Response)=>{
  res.status(200).end();
};

export const postIndex = (req : Request, res : Response) => {
  const incomingData : Payment = req.body;

  if (!incomingData.id) {
    throw new HttpError(400, 'Payment ID is necessary');
  }

  const response : ResponseWrapper = {
    status: 200,
    message: 'Great!',
    incomingData: incomingData,
  };

  res.send(response);
};
