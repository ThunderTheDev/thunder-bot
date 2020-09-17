const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const Discord = require("discord.js");

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "Sorry but you do not have **ADMIN** permission to warn anyone"
      );
    }
    if(message.mentions.users.first().bot) {
      return message.channel.send("I m sorry but You can not warn bots :D")
    }
    const user = message.mentions.members.first()

     if(!user) {
      return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reason>")
    }
    if(message.author.id === user.id) {
      return message.channel.send("I m sorry but You can not warn yourself")
    }
  
    const reason = args.slice(1).join(" ")
    if(!reason) {
      return message.channel.send("I m sorry but  Please provide reason to warn - warn @mention <reason>")
    }

  
      let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    if(warnings === 6) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 5 warnings`)
    }

    
 if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
    }

    else if(warnings !== null) {
      db.add(`warnings_${message.guild.id}_${user.id}`, 1)
     user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
  
      let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setTitle("WARNINGS")
                .setColor("RANDOM")
                .addField("MODERATOR", `**<@!${message.author.id}>**`)
                .addField("NO. OF WARN (S)", `**${warnings}**`)
                .addField("REASON", `**${user} was warned for ${reason}**`)
               .setFooter(`Warned by ${message.author.username}`)
                .setTimestamp()
    
            user.send(embed)
            message.channel.send(embed);
}
  }
}