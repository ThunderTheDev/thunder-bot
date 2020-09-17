
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "kiss",
  category: "fun",
  description: "Kiss ur mates xd",
  usage: "kiss ",
  run: async (client, message, args) => {
       
 let user = message.mentions.users.first();
  if (message.mentions.users.size < 1)
    return message.reply("You must mention someone to kiss them.");
        
if(user.id === message.author.id) return message.channel.send("I m sorry but You can't kiss your-self") 

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author
  let answers = [
    'https://cdn.discordapp.com/attachments/704014536952250410/729726945415397436/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729726960850173992/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729726971659157534/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729726979594649600/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729726991602941952/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729727013631295488/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729727018811260968/image.gif',



 ];
  let answer = answers[Math.floor(Math.random()*answers.length)];
            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setTitle("Kiss")
                .setColor("RANDOM")
                .setImage(answer)
               .setDescription(`${message.author.username} Kisses  ${member.user.username}`) 
               .setFooter(`Bot by ThunderOP`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

}