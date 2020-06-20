import {Connection} from 'amqplib/callback_api';

declare namespace Express {
   export interface Request {
      rabbitConnection : Connection
   }
}
