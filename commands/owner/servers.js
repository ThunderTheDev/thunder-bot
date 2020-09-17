const Discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "servers",
  category: "owner",
  usage: "servers",
  description: "servers of the bot!",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.default_prefix
  }
  
    if (message.author.id !== "554185890453389322") return message.reply("I m sorry but this is a owner only command")

      client.guilds.cache.forEach((guild) => {
        message.channel.send(
          `${guild.name} has a total of ${guild.memberCount} members`
        )
      })
    
    
  }
}