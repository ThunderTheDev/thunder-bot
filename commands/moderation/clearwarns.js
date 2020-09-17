const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "clearwarns",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Get the warnings of users",
  run: async (client, message, args) => {
    
  if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("I m sorry but You should have admin perms to use this command")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Please mention the person whose warning you want to reset")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings")
    }
  let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
 if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`)
    }
 db.delete(`warnings_${message.guild.id}_${user.id}`)

            message.channel.send("Channel reseted");
      
  } 
}