
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "cry",
  category: "fun",
  description: "Show ur feelings via this command xD",
  usage: "cry ",
  run: async (client, message, args) => {

        
const member = message.member;
let target = message.author
  let answers = [
    'https://media.discordapp.net/attachments/704014536952250410/729682959011020911/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684075220041828/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684155885158440/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684231999062126/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684266874699876/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684389352439898/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684459619614760/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684517970903150/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684667703492668/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684810175479808/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729684935828307978/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729685021262348408/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729685090958966794/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729685174031482929/image.gif',

 ];
  let answer = answers[Math.floor(Math.random()*answers.length)];
            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setTitle("Cry")
                .setColor("RANDOM")
                .setImage(answer)
               .setDescription(`${message.author.username} is Crying`) 
               .setFooter(`Bot by ThunderOP`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

}
