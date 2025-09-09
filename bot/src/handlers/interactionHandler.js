const topic1Handler = require('./topic1Handler');
const topic2Handler = require('./topic2Handler');
const topic3Handler = require('./topic3Handler');


const userData = {};

const buttonHandlers = {
  "startChoice-1": topic1Handler.topic1Question,
  "topic1-submit-button": topic1Handler.topic1Submit,
  "topic1-cancel-button": topic1Handler.topic1Cancel,

  "startChoice-2" : topic2Handler.topic2Question,
  "topic2-submit-button": topic2Handler.topic2Submit,
  "topic2-cancel-button": topic2Handler.topic2Cancel,

  "startChoice-3" : topic3Handler.topic3Question,
  "topic3-submit-button": topic3Handler.topic3Submit,
  "topic3-cancel-button": topic3Handler.topic3Cancel,
};

module.exports = (client) => {
  return async (event) => {

    if (event.button_id) {
      const { button_id } = event;
      const idParts = button_id.split('_');
      const actionId = idParts[idParts.length - 1];
      
      const handler = buttonHandlers[actionId];
      if (handler) {
        try {
          await handler(client, event);
        } catch (error) {
          console.error(`Lỗi khi xử lý nút bấm ${button_id}:`, error);
          const channel = await client.channels.fetch(event.channel_id);
          await channel.send({ t: 'Đã xảy ra lỗi khi thực thi hành động này.' });
        }
      }
    }
  };
};