declare global {
    namespace Express {
        export interface Request {
            RMQChannel : Connection
        }
    }
}
