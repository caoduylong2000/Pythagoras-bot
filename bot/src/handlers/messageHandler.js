const fs = require('fs');
const path = require('path');

const commands = new Map();
const commandsPath = path.join(__dirname, '../commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.set(command.name, command);
}

module.exports = (client) => {
  return async (event) => {
    const prefix = '*';
    const content = event?.content?.t;
    
    if (!content || !content.startsWith(prefix)) return;

    const args = content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!commands.has(commandName)) return;

    const command = commands.get(commandName);

    try {
      await command.execute(client, event, args);
    } catch (error) {
      console.error(`Lỗi khi thực thi lệnh ${commandName}:`, error);
      const channel = await client.channels.fetch(event.channel_id);
      channel.reply({ t: 'Đã xảy ra lỗi khi thực thi lệnh này.' });
    }
  };
};