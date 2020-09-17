const Discord = require("discord.js")
const discord = require('discord.js')
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "moderation",
  usage: "welcome <#channel>",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    if (!message.member.hasPermission("MANAGE_SERVER")) {
      return message.channel.send(
        "**I m sorry but you need manage server permission to use this command**"
      );
    } 
     let wembed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Welcome Messages are Successfully Redirected to ${channel} Now Welcome Messages will appear in ${channel} **`);
    message.channel.send(wembed)
  
}
}