import { HttpError } from '../src/class/HttpError';

describe('Classes tests', () => {
  const err = new HttpError(500,'Internal error');

  it('HttpError class', async () => {
    expect(err.statusCode).toBe(501);
    expect(err.message).toBe('Internal error');
  });
});
