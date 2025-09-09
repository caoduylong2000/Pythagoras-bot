const topic1Services = require('../services/topic1Services');
const topic1Handler = require('../handlers/topic1Handler');

async function toilaai(client, event, name, birthday) {
  await topic1Services.sendAllNumerologyResults(client, event, name, birthday);
}

module.exports = {
    name: 'toilaai',
    description: 'Tôi là ai?',
    execute: async (client, event) => {
        const { channel_id, message_id, clan_id, sender_id } = event;

        const channelFetch = await client.channels.fetch(channel_id);
        const messageFetch = await channelFetch.messages.fetch(message_id);

        const parts = event.content.t.split(' ');

        if (parts.length < 3) {
            await messageFetch.reply({t: 'Vui lòng nhập đầy đủ tên và ngày sinh theo định dạng: `*toilaai [tên] [ngày sinh]`'} );
            return;
        }

        const name = parts[1];
        const birthday = parts[2];

        const newEvent = {
            channel_id: event.channel_id,
            message_id: event.message_id,
            sender_id: event.sender_id,
            message: event.content.t,
        };
        
        await toilaai(client, newEvent, name, birthday);
    }
};