const Discord = require("discord.js")
const discord = require('discord.js')
const db = require("quick.db")

module.exports = {
  name: "setleave",
  category: "moderation",
  usage: "leave <#channel>",
  description: "Set the leave channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("**I m sorry but Please Mention the channel first**")
    }
    
    //Now we gonna use quick.db
    
    db.set(`leavechannel_${message.guild.id}`, channel.id)
    if (!message.member.hasPermission("MANAGE_SERVER")) {
      return message.channel.send(
        "**I m sorry but you need manage server permission to use this command**"
      );
    }
    let lembed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Leave Messages are Successfully Redirected to ${channel} Now Leave Messages will appear in ${channel} **`)
    message.channel.send(lembed)
  
}
}