const dotenv = require("dotenv");
const { MezonClient } = require("mezon-sdk");
const messageHandler = require("./bot/src/handlers/messageHandler");
const interactionHandler = require("./bot/src/handlers/interactionHandler");

dotenv.config();

async function main() {
  const client = new MezonClient(process.env.APPLICATION_TOKEN);

  await client.login();

  client.onChannelMessage(messageHandler(client));
  client.onMessageButtonClicked(interactionHandler(client));
}

main()
  .then(() => {
    console.log("bot start!");
  })
  .catch((error) => {
    console.error(error);
  });
