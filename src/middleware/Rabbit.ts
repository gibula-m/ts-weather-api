import amqp from 'amqplib/callback_api';
import {Request, Response, NextFunction} from 'express';
import {Channel, Connection} from 'amqplib/callback_api';

const connURL : string = "";

export const rabbitInitializer = (req : Request, res : Response, next : NextFunction) => {
  amqp.connect(connURL, function (err : any, conn : Connection) {
   conn.createChannel(function (err : any, channel : Channel) {
      // req.rabbitConnection = channel;
   });
  });
}
