import amqp, { Message, Connection } from 'amqplib';

const connURL = 'amqp://localhost';

export const queue = async (queueName : string, msg : string) => {
  let connection = await amqp.connect(connURL);
  let ch = await connection.createChannel();

  ch.assertQueue(queueName,{durable: true});
  ch.sendToQueue(queueName, Buffer.from(msg));
  
  console.log("Sent to Queue : " + queueName + " msg : " + msg);
  return true;
};

export const get = async (queueName : string) => {
  const connection = await amqp.connect(connURL);
  const ch = await connection.createChannel();
  await ch.assertQueue(queueName,{durable: true});
  await ch.prefetch(1);

  let msg = await ch.get(queueName,{noAck:true});
  if(msg !== false){
    return msg.content.toString();
  }else{
    return false;
  }
};
