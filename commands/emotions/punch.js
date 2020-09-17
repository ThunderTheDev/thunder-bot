
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "punch",
  category: "fun",
  description: "Show ur feelings via this command xD",
  usage: "cry ",
  run: async (client, message, args) => {
       
 let user = message.mentions.users.first();
  if (message.mentions.users.size < 1)
    return message.reply("You must mention someone to punch them.");
        
if(user.id === message.author.id) return message.channel.send("I m sorry but You can't Punch your-self") 

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author
  let answers = [
    'https://images-ext-1.discordapp.net/external/OQoT1W4xCXN0bqw36YboUH0E6-BaCKfeYvxAoCqjELQ/https/media.discordapp.net/attachments/704014536952250410/729690676815724554/1puch.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729724895252185214/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729725049392857098/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729725232486809642/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729725338745176084/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729725520584900679/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729725621634334811/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729725830539771904/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729725946369933322/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729726182160990226/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729726198153740369/image.gif',


 ];
  let answer = answers[Math.floor(Math.random()*answers.length)];
            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setTitle("Punch")
                .setColor("RANDOM")
                .setImage(answer)
               .setDescription(`${message.author.username} Punches  ${member.user.username}`) 
               .setFooter(`Bot by ThunderOP`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

}