const { updateMessage, getRandomColor } = require('../utils/helps');
const topic3Services = require('../services/topic3Services');
const { EMarkdownType, EMessageComponentType } = require("mezon-sdk");

const userData = {};

async function topic3Question(client, event) {
    const channel = await client.channels.fetch(event.channel_id);
      const message = await channel.messages.fetch(event.message_id);
    
      const messageid = message.id;
      const clanId = channel.clan.id;
    
      const sessionId = `${event.sender_id}_${Date.now()}`;
      userData[messageid] = { sessionId };
    
      const responseMessage = 
      'Bạn muốn biết: Bạn Có gì đặc biệt?\n\n' + 
      'Hãy cùng thử xem qua ngày sinh của bạn nhé!\n' + 
      'Chúng ta có thể biết thêm được về: \n' +
      '- Điểm mạnh, điểm yếu bẩm sinh.\n' +
      '- Tính cách cốt lõi và xu hướng hành vi.\n' +
      '- Năng lực nổi bật hoặc thiếu hụt.\n\n' +
      'Hãy cho mình biết ngày sinh (dương lịch) của bạn!\nHãy cùng tìm hiểm xem đâu là thế mạnh của bạn!';
    
    
      const newPayload = {
        t: responseMessage,
        // ej: [
        // //   { s: 71, e: 83, emojiid: "7321077315343347866" },
        // //   { s: 94, e: 103, emojiid: "7240250921240375281" },
        // //   { s: 117, e: 125, emojiid: "7237783059556945995" },
        // //   { s: 137, e: 150, emojiid: "7249095804472906732" },
        // ],
        // mk: [
        // //   { type: EMarkdownType.BOLD, s: 84, e: 92 },
        // //   { type: EMarkdownType.BOLD, s: 104, e: 116 },
        // //   { type: EMarkdownType.BOLD, s: 126, e: 136 },
        // //   { type: EMarkdownType.BOLD, s: 151, e: 159 },
        // ],
        embed: [
          {
            color: getRandomColor(),
            title: `Nhập thông tin cá nhân.`,
            fields: [
              {
                name: 'Chọn ngày sinh của bạn:',
                inputs: {
                  id: `${clanId}_${messageid}_topic3-datepicker`,
                  type: EMessageComponentType.DATEPICKER,
                  component: {},
                },
              },
            ],
          }
        ],
        components: [
          {
            components: [
              {
                id: `${clanId}_${messageid}_topic3-submit-button`,
                type: EMessageComponentType.BUTTON,
                component: { label: "Bắt đầu!", style: 3, custom_id: `topic1-submit-button:${sessionId}` }
              },
              {
                id: `${clanId}_${messageid}_topic3-cancel-button`,
                type: EMessageComponentType.BUTTON,
                component: { label: "Huỷ bỏ", style: 2, custom_id: `topic1-cancel-button:${sessionId}` }
              }
            ]
          }
        ]
      };
      await updateMessage(client, event, newPayload);
}

async function topic3Submit(client, event) {
    const channel = await client.channels.fetch(event.channel_id);
    const message = await channel.messages.fetch(event.message_id);

    const messageid = message.id;
    const clanId = channel.clan.id;

    const extraDataString = event.extra_data.trim();

    if(!extraDataString){
        await message.reply({ t: 'Hãy nhập đủ các thông tin để tiếp tục!'});
    }
    else {
        const rawData = `${extraDataString}`;
        const data = JSON.parse(rawData);

        const birthday = data[`${clanId}_${messageid}_topic3-datepicker`];
        await topic3Services.sendBirthChartResults(client, event, birthday);
    }

    delete userData[messageid];
}

async function topic3Cancel(client, event) {
  delete userData[event.message_id];
  const responseMessage = 'Hẹn gặp bạn lần sau!';
  await updateMessage(client, event, { t: responseMessage, components: [] });
}

module.exports = {
  topic3Question,
  topic3Submit,
  topic3Cancel,
};