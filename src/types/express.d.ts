import {Connection} from 'amqplib/callback_api';

declare global {
    namespace Express {
        export interface Request {
            rabbitChannel : Channel
        }
    }
}
