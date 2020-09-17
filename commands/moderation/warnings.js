const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warnings",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Get the warnings of users",
  run: async (client, message, args) => {
    
   const user = message.mentions.members.first() || message.author
let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

 if(warnings === null) warnings = 0;
      let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setTitle("WARNINGS RATE")
                .setColor("RANDOM")
                .addField("NO. OF WARN (S)", `**${warnings}**`)
               .setFooter(`Requested by ${message.author.username}`)
                .setTimestamp()
    
            message.channel.send(embed);



 message.channel.send(`${user} have **${warnings}** warning(s)`)

  } 
}