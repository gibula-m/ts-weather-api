export class HttpError extends Error {
  statusCode : Number;
  message : string;
  constructor(statusCode : Number, message : string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
