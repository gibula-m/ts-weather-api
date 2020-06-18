import { Request,Response,NextFunction } from 'express';

export const errorHandler = (err : any, res : any) => {
  res.status(err.statusCode).json(err);
};
