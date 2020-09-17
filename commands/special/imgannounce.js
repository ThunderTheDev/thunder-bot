const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "imgannounce",
  category: "special",
  description: "Embed announced images",
  usage: "imgannounce <hex> <link>",
  run: async (client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `I could not find that channel in the guild!`
      );
      if (!args[1]) return message.channel.send(`You did not specify your hex!`);    
      if (!args[2]) return message.channel.send(`You did not specify your image link!`);    
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply(
        "**You need  __Manage Messages__ Permission to use this command **"
      );
    } 
  let imgEmbed = new Discord.MessageEmbed()
    .setColor(args[1])
    .setImage(args[2]);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    } 
 channel.send(imgEmbed);
  message.delete();
}}