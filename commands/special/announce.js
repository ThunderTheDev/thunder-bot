const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "embed",
  category: "special",
  description: "Embed messages",
  usage: "embed <message>",
  run: async (client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `I could not find that channel in the guild!`
      );
      if (!args[1]) return message.channel.send(`You did not specify your hex!`);    
      if (!args[2]) return message.channel.send(`You did not specify your text!`);    

      const text = args.slice(2).join(" ")
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply(
        "**You need  __Manage Messages__ Permission to use this command ** "
      );
    } 
  let sayEmbed = new Discord.MessageEmbed()
    .setColor(args[1])
    .setDescription(args.slice(2).join(" "))

 channel.send(sayEmbed);
  message.delete();
}}