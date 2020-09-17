const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "embed",
  category: "special",
  description: "Announce messages",
  usage: "embed <hex> <message>",
  run: async (client, message, args) => {

      if (!args[0]) return message.channel.send(`You did not specify your hex!`);    
      if (!args[1]) return message.channel.send(`You did not specify your text!`);    

      const text = args.slice(1).join(" ")
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply(
        "**You need  __Manage Messages__ Permission to use this command ** "
      );
    } 
  let sayEmbedm = new Discord.MessageEmbed()
    .setColor(args[0])
    .setDescription(args.slice(1).join(" "))

 message.channel.send(sayEmbedm);
  message.delete();
}}