import amqp, { Message } from 'amqplib/callback_api';

const connURL = 'amqp://localhost';

export const queue = async (queueName : string, msg : string) => {
  amqp.connect(connURL, function(err, connection) {
    if (err) throw err;
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

      channel.assertQueue(queueName,{durable: true});
      channel.sendToQueue(queueName, Buffer.from(msg));
      console.log("Sent to Queue : " + queueName + " msg : " + msg);
    });
  });
};

export const get = async (queueName : string) => {
  amqp.connect(connURL, function(err, connection) {
    if (err) throw err;
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }

      channel.assertQueue(queueName,{durable: true});
      channel.prefetch(1);
      channel.consume(queueName, getMessage,{noAck:false});
    });
  });
};

const getMessage = (msg : Message) => {
  console.log(Buffer.from(msg.content).toString());
}
