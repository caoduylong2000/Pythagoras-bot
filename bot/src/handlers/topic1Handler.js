const { updateMessage, getRandomColor } = require('../utils/helps');
const topic1Services = require('../services/topic1Services');
const { EMarkdownType, EMessageComponentType } = require("mezon-sdk");

// Biến cục bộ để lưu dữ liệu người dùng tạm thời
const userData = {};

async function topic1Question(client, event) {
  const channel = await client.channels.fetch(event.channel_id);
  const message = await channel.messages.fetch(event.message_id);

  const messageid = message.id;
  const clanId = channel.clan.id;

  const sessionId = `${event.sender_id}_${Date.now()}`;
  // Lưu sessionID vào userData, mặc dù không dùng ở đây nhưng là một cách làm tốt
  userData[messageid] = { sessionId };

  const responseMessage = 'Bạn muốn biết: Bạn là ai?\n\n' + 
  'Hãy cùng tìm hiểu qua các con số sau nhé!::lac_dit::\n' + 
  '::boiroi_1:: Đường đời - Nói lên sứ mệnh của bạn đang mang trong cuộc sống này.\n' +
  '::sad_cat_thumbsup:: Sứ mệnh - Nói lên tài năng, thế mạnh mà bạn có.\n' +
  '::die_with_a_smile:: Linh Hồn - Nói lên khát khao trong tim bạn.\n' +
  '::ohoho:: Nhân cách - Nói lên ấn tượng đầu tiên bạn tạo ra cho những người xung quanh.\n' +
  '::cam_sung:: Thái độ - Nói lên phản ứng tự nhiên của bạn với cuộc sống.\n\n' +
  'Hãy cho mình biết tên đầy đủ và ngày/tháng/năm sinh của bạn. \nMình sẽ cùng bạn tìm hiểu xem những con số nào đang thể hiện lên con người của bạn nhé!';

  const newPayload = {
    t: responseMessage,
    ej: [
      { s: 68, e: 79, emojiid: "7340582955013235895" },
      { s: 80, e: 92, emojiid: "7285569510313090232" },
      { s: 160, e: 180, emojiid: "7256590040840416600" },
      { s: 229, e: 249, emojiid: "7343583440971239095" },
      { s: 294, e: 303, emojiid: "7315036551549112277" },
      { s: 381, e: 393, emojiid: "7245633478365704845" },
    ],
    mk: [
      { type: EMarkdownType.BOLD, s: 93, e: 102 },
      { type: EMarkdownType.BOLD, s: 181, e: 188 },
      { type: EMarkdownType.BOLD, s: 250, e: 258 },
      { type: EMarkdownType.BOLD, s: 304, e: 313 },
      { type: EMarkdownType.BOLD, s: 394, e: 401 },
    ],
    embed: [
      {
        color: getRandomColor(),
        title: `Nhập thông tin cá nhân.`,
        fields: [
          {
            name: 'Nhập tên của bạn:',
            inputs: {
              id: `${clanId}_${messageid}_input-name-field`,
              type: EMessageComponentType.INPUT,
              component: {
                id: `input-${messageid}-name-plhder`,
                placeholder: 'Ex. Write something',
                required: true,
              },
            },
          },
          {
            name: 'Chọn ngày sinh của bạn:',
            inputs: {
              id: `${clanId}_${messageid}_daily-block-ip`,
              type: EMessageComponentType.DATEPICKER,
              component: {
                required: true,
              },
            },
          },
        ],
      }
    ],
    components: [
      {
        components: [
          {
            id: `${clanId}_${messageid}_topic1-submit-button`,
            type: EMessageComponentType.BUTTON,
            component: { label: "Bắt đầu!", style: 3, custom_id: `topic1-submit-button:${sessionId}` }
          },
          {
            id: `${clanId}_${messageid}_topic1-cancel-button`,
            type: EMessageComponentType.BUTTON,
            component: { label: "Huỷ bỏ", style: 2, custom_id: `topic1-cancel-button:${sessionId}` }
          }
        ]
      }
    ]
  };
  await updateMessage(client, event, newPayload);
}

async function topic1Submit(client, event) {
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

        const name = data[`${clanId}_${messageid}_input-name-field`];
        const birthday = data[`${clanId}_${messageid}_daily-block-ip`];
        await topic1Services.sendAllNumerologyResults(client, event, name, birthday);
    }

    delete userData[messageid];
}

async function topic1Cancel(client, event) {
  delete userData[event.message_id];
  const responseMessage = 'Hẹn gặp bạn lần sau!';
  await updateMessage(client, event, { t: responseMessage, components: [] });
}

module.exports = {
  topic1Question,
  topic1Submit,
  topic1Cancel,
};