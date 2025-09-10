const { EMarkdownType, EMessageComponentType } = require("mezon-sdk");
const sessions = require("../utils/session");

module.exports = {
  name: 'start',
  description: 'Start process',
  execute: async (client, event) => {
    const { channel_id, message_id } = event;

    const channelFetch = await client.channels.fetch(channel_id);
    const messageFetch = await channelFetch.messages.fetch(message_id);

    const messageid = messageFetch.id;
    const clanId = channelFetch.clan.id;

    const replyMessage = {
      t: 'Bạn có đang có điều gì thắc mắc về bản thân?',
      components: [
        {
          components: [
            {
              id: `${clanId}_${messageid}_startChoice-1`,
              type: EMessageComponentType.BUTTON,
              component: {
                label: "Tôi là ai?",
                style: 1, 
              }
            },
            {
              id: `${clanId}_${messageid}_startChoice-2`,
              type: EMessageComponentType.BUTTON,
              component: {
                label: "Tôi đang ở đâu?",
                style: 2, 
              }
            },
            {
              id: `${clanId}_${messageid}_startChoice-3`,
              type: EMessageComponentType.BUTTON,
              component: {
                label: "Tôi có gì đặc biệt?",
                style: 3, 
              }
            }
          ]
        }
      ]
    };
    const replyMsg = await messageFetch.reply(replyMessage);

    const sessionId = `${messageFetch.sender_id}_${clanId}`;
    sessions.set(sessionId, {
      senderId: event.sender_id,
      channelId: event.channel_id,
      messageId: replyMsg.message_id,
      timestamp: Date.now()
    });
  },
};