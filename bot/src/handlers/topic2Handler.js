const { updateMessage, getRandomColor } = require(`../utils/helps`);
const sessions = require(`../utils/session`);
const topic2Services = require(`../services/topic2Services`);
const { EMarkdownType, EMessageComponentType } = require("mezon-sdk");

// Biến cục bộ để lưu dữ liệu người dùng tạm thời
const userData = {};

async function topic2Question(client, event) {
  const channel = await client.channels.fetch(event.channel_id);
  const message = await channel.messages.fetch(event.message_id);

  const messageid = message.id;
  const clanId = channel.clan.id;

  const sessionId = `${event.user_id}_${clanId}`;
  const sessionData = sessions.get(sessionId);

  if (!sessionData || sessionData.senderId !== event.user_id || sessionData.messageId !== event.message_id) {
    console.log("Không phải message cho bạn!")
    return; //client.sendMessage(event.channel_id, "Bạn không có quyền tương tác với tin nhắn này.");
  }

  const responseMessage = 'Bạn muốn biết: Bạn đang ở đâu?\n\n' + 
  'Mỗi người đều sẽ trải quả 4 giai đoạn:\n' + 
  '::w_cat_13:: Tuổi trẻ \n' +
  '::ahaha:: Trường thành\n' +
  '::chan:: Trung niên\n' +
  '::guongcuoi:: Cuối đời\n\n' +
  'Mỗi giai đoạn sẽ mang theo 1 con số chủ đạo, thể hiện cho những bài học, cơ hội và thách thức mà bạn cần đối mặt.\n\n' +
  'Hãy cho mình biết ngày sinh (dương lịch) của bạn!\nMình sẽ giúp bạn tìm ra đâu là những giai đoạn bạn sẽ trải qua!\nVà mỗi giai đoạn sẽ mang đến điều gì cho bạn nhé!';

  const newPayload = {
    t: responseMessage,
    ej: [
      { s: 71, e: 83, emojiid: "7321077315343347866" },
      { s: 94, e: 103, emojiid: "7240250921240375281" },
      { s: 117, e: 125, emojiid: "7237783059556945995" },
      { s: 137, e: 150, emojiid: "7249095804472906732" },
    ],
    mk: [
      { type: EMarkdownType.BOLD, s: 84, e: 92 },
      { type: EMarkdownType.BOLD, s: 104, e: 116 },
      { type: EMarkdownType.BOLD, s: 126, e: 136 },
      { type: EMarkdownType.BOLD, s: 151, e: 159 },
    ],
    embed: [
      {
        color: getRandomColor(),
        title: `Nhập thông tin cá nhân.`,
        fields: [
          {
            name: `Chọn ngày sinh của bạn:`,
            inputs: {
              id: `${clanId}_${messageid}_topic2-datepicker`,
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
            id: `${clanId}_${messageid}_topic2-submit-button`,
            type: EMessageComponentType.BUTTON,
            component: { label: "Bắt đầu!", style: 3 }
          },
          {
            id: `${clanId}_${messageid}_topic2-cancel-button`,
            type: EMessageComponentType.BUTTON,
            component: { label: "Huỷ bỏ", style: 2 }
          }
        ]
      }
    ]
  };
  await updateMessage(client, event, newPayload);
}

async function topic2Submit(client, event) {
  const channel = await client.channels.fetch(event.channel_id);
  const message = await channel.messages.fetch(event.message_id);

  const messageid = message.id;
  const clanId = channel.clan.id;

  const sessionId = `${event.user_id}_${clanId}`;
  const sessionData = sessions.get(sessionId);

  if (!sessionData || sessionData.senderId !== event.user_id || sessionData.messageId !== event.message_id) {
    console.log("Không phải message cho bạn!")
    return; //client.sendMessage(event.channel_id, "Bạn không có quyền tương tác với tin nhắn này.");
  }

  const extraDataString = event.extra_data.trim();

  console.log(extraDataString);

  if(!extraDataString){
      await message.reply({ t: `Hãy nhập đủ các thông tin để tiếp tục!`});
  }
  else {
    const rawData = `${extraDataString}`;
    const data = JSON.parse(rawData);

    const birthday = data[`${clanId}_${messageid}_topic2-datepicker`];
    await topic2Services.sendAdvancedNumerologyResults(client, event, birthday);
  }

  delete userData[event.message_id];
  sessions.delete(sessionId)
}

async function topic2Cancel(client, event) {
  const channel = await client.channels.fetch(event.channel_id);
  const message = await channel.messages.fetch(event.message_id);

  const clanId = channel.clan.id;

  const sessionId = `${event.user_id}_${clanId}`;
  const sessionData = sessions.get(sessionId);

  if (!sessionData || sessionData.senderId !== event.user_id || sessionData.messageId !== event.message_id) {
    console.log("Không phải message cho bạn!")
    return; //client.sendMessage(event.channel_id, "Bạn không có quyền tương tác với tin nhắn này.");
  }

  delete userData[event.message_id];
  sessions.delete(sessionId)
  const responseMessage = `Hẹn gặp bạn lần sau!`;
  await updateMessage(client, event, { t: responseMessage, components: [] });
}

module.exports = {
  topic2Question,
  topic2Submit,
  topic2Cancel,
};