const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author},I m sorry but You do not have perms to ban someone**`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author},I m sorry but Please mention the person who you want to ban.**`)
    }
    if(target.id === "724300617656303687") {
      return message.channel.send(`**${message.author},I m sorry but  I cannot self-ban**`)
     }
    
 if(target.id === message.author.id) {
      return message.channel.send(`**${message.author}**,I m sorry but You can not ban yourself!`)

 }      
  
        let reason = args.slice(1).join(" ");

        if(!reason) {
            const res = "No reason given";
        } else {
            const res = reason
        }
        
    target.ban(args[1])
    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`Banned ${target} (${target.id})`)
    .addField("MODERATOR", `**<@!${message.author.id}>**`)
    .addField("REASON", reason)
    .setColor("#ff2050")
    .setFooter(`Banned by ${message.author.username}`);
    
    message.channel.send(embed)

    let dmembed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`You were banned from ${message.guild.name}`)
    .addField("MODERATOR", `**<@!${message.author.id}>**`)
    .addField("REASON", reason)
    .setColor("#ff2050")
    .setFooter(`Banned by ${message.author.username}`);
    user.send(dmembed)    
      
  }
}
