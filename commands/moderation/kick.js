const discord = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    
      if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author},I m sorry but  You do not have enough permission to use this command**`)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author},I m sorry but  I do not have enough permission to use this command**`)
    } 
    const user = message.mentions.members.first()

 let target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author},I m sorry but  Please mention the person who you want to kick**`)
    }
    if(target.id === "724300617656303687") {
      return message.channel.send(`**${message.author},I m sorry but  I cannot self-kick**`)
     }
   if(target.id === message.author.id) {
     return message.channel.send(`**${message.author},I m sorry but  You can not kick yourself**`)
    }
   if(target.id === 724300617656303687) {
     return message.channel.send(`**${message.author},I m sorry but  I cannot self-kick**`)
    }
        let reason = args.slice(1).join(" ");

        if(!reason) {
            const res = "No reason given";
        } else {
            const res = reason
        }
 if(!args[1]) {
    return message.channel.send(`**${message.author.username}**,I m sorry but  Please Give Reason to kick`)
  }
    target.kick(args[1]); 
 let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked ${target} (${target.id})`)
    .addField("MODERATOR", `**<@!${message.author.id}>**`)
    .addField("REASON", reason)
    .setColor("#ff2050")
    .setFooter(`Kicked by ${message.author.username}`);
    
    message.channel.send(embed)
 let dmsembed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`You were Kicked from ${message.guild.name})`)
    .addField("MODERATOR", `**<@!${message.author.id}>**`)
    .setColor("#ff2050")
    .setFooter(`Kicked by ${message.author.username}`);
    
    user.send(dmsembed)   
}
 }