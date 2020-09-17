
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "ping",
  category: "special",
  description: "Returns Latency and API Ping",
  category: "special",
  timeout: 10000,
    run: async (client, message, args) => {
      const msg = await message.channel.send("Pinging...");
      const Embed = new MessageEmbed()
        .setTitle("Pong!")
        .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
        .setDescription(
          `:hourglass: Latency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n:timer: API Ping is ${Math.round(client.ws.ping)}`
        )
        .setColor("RANDOM");
      msg.edit(Embed);
      msg.edit("\u200b");
    }
};