import redis from 'redis';

export const set = (key : string, value : string) => {
  const client = redis.createClient();
  client.set(key, value, redis.print);
}

export const get = async (key : string) => {
  const client = redis.createClient();
  let item = client.get(key, (err, value) => {
    return value;
  });
  return item;
}
