const topic3Services = require('../services/topic3Services');

async function toidacbiet(client, event, birthday) {
  await topic3Services.sendBirthChartResults(client, event, birthday, true);
}

module.exports = {
    name: 'toidacbiet',
    description: 'Tôi có gì đặc biệt?',
    execute: async (client, event) => {
        const { channel_id, message_id, clan_id, sender_id } = event;

        const channelFetch = await client.channels.fetch(channel_id);
        const messageFetch = await channelFetch.messages.fetch(message_id);

        const parts = event.content.t.split(' ');

        if (parts.length < 2) {
            await messageFetch.reply({t: 'Hãy nhập đầy đủ tên và ngày sinh theo mẫu: `*toidacbiet [ngày sinh]`'} );
            return;
        }

        // const name = parts[1];
        const birthday = parts[1];

        const newEvent = {
            channel_id: event.channel_id,
            message_id: event.message_id,
            sender_id: event.sender_id,
            message: event.content.t,
        };
        
        await toidacbiet(client, newEvent, birthday);
    }
};