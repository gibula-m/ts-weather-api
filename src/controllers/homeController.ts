import { Request,Response,NextFunction } from 'express';
import { Payment } from '../interfaces/Payment';
import { ResponseWrapper } from '../interfaces/Response';
import { HttpError } from '../errors/HttpError'


export const getIndex = (req : Request, res : Response, next : NextFunction) => {
  res.status(200).end();
}

export const postIndex = (req : Request, res : Response, next : NextFunction) => {
  const incomingData : Payment = req.body;

  if(!incomingData.id){
    throw new HttpError(400,"Payment ID is necessary");
  }

  const response : ResponseWrapper = {
    status : 200,
    message : "Great!",
    incomingData : incomingData
  }

  res.send(response);
}
