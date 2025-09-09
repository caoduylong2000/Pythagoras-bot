const {EMarkdownType} = require("mezon-sdk")

module.exports = {
  name: 'help',
  description: 'Commands List',
  execute: async (client, event) => {
    const { channel_id, message_id, clan_id, sender_id } = event;

    const channelFetch = await client.channels.fetch(channel_id);
    const messageFetch = await channelFetch.messages.fetch(message_id);

    const helpMessage = 'Danh sách command: \n\n' + 
    '*help - Hiển thị danh sách command \n' +
    '*start - Bắt đầu sử dụng bot \n' + 
    '*toilaai [tên] [năm-tháng-ngày] - Tìm hiểu thông tin "Bạn là ai" qua tên và ngày-tháng-năm sinh (Tên viêt liền không dấu).';
    '*toiodau [năm-tháng-ngày] - Tìm hiểu thông tin "Bạn ở đâu?" qua ngày-tháng-năm sinh.';
    '*toidacbiet [năm-tháng-ngày] - Tìm hiểu thông tin "Bạn có gì đặc biệt?" qua ngày-tháng-năm sinh.';

    await messageFetch.reply({ 
        t: helpMessage,
        mk: [
          {
            type: EMarkdownType.PRE,
            s: 0,
            e: helpMessage.length,
          },
        ]
    });
  },
};