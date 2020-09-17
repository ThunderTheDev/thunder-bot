const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "invite",
  usage: "Introduction",
  description: "Command Info",
  category: "help",
  run: (client, message, args) => {
  let inviteEmbed = new Discord.MessageEmbed()
    .setThumbnail("https://media.discordapp.net/attachments/706213992078508062/729266838717857812/invite.gif?width=633&height=475")
    .setColor("RANDOM")
    .setAuthor(" ")
    .setFooter(`Requested by ${message.author.username}`)
    .setDescription(` __**Links**__  

[Click here to Join our Server](https://discord.gg/hvUjDKR) 

[Click here to Invite the Bot](https://discord.com/api/oauth2/authorize?client_id=724300617656303687&permissions=2147483639&scope=bot)`);
   message.channel.send(inviteEmbed)
  }
}