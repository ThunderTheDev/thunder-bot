const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "eembed",
  category: "special",
  description: "Announce messages",
  usage: "embed <hex> <message>",
  run: async (client, message, args) => {

      if (!args[0]) return message.channel.send(`You did not specify your hex!`);    
      if (!args[1]) return message.channel.send(`You did not specify your text!`);    

    // And we get the bot to say the thing: 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply(
        "**You need  __Manage Messages__ Permission to use this command ** "
      );
    
    } 
    
  let sayEmbedm = new Discord.MessageEmbed()
    .setDescription(args.slice(1).join(" "))
    const m = message.guild.messages.cache.find((x) => (x.id === args[0])) 
    x.edit(sayEmbedm);
  message.delete();
}}