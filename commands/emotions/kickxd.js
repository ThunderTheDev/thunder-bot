
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "kickxd",
  category: "fun",
  description: "Kick ur mates xd",
  usage: "kick ",
  run: async (client, message, args) => {
       
 let user = message.mentions.users.first();
  if (message.mentions.users.size < 1)
    return message.reply("You must mention someone to kick them.");
        
if(user.id === message.author.id) return message.channel.send("I m sorry but You can't Kick your self bero") 

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author
  let answers = [
    'https://cdn.discordapp.com/attachments/704014536952250410/729715179859869726/image.gif',
    'https://media.discordapp.net/attachments/704014536952250410/729715657171533844/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729715849392422922/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729716079575826533/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729716190653710346/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729716352352256010/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729716461500629012/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729716553226125386/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729716888527044678/image.gif',


 ];
  let answer = answers[Math.floor(Math.random()*answers.length)];
            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setTitle("KickXD")
                .setColor("RANDOM")
                .setImage(answer)
               .setDescription(`${message.author.username} Kicks  ${member.user.username}`) 
               .setFooter(`Bot by ThunderOP`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

}