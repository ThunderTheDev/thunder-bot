
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "kill",
  category: "fun",
  description: "Kill ur mates xd",
  usage: "kill ",
  run: async (client, message, args) => {
       
 let user = message.mentions.users.first();
  if (message.mentions.users.size < 1)
    return message.reply("You must mention someone to kill them.");
        
if(user.id === message.author.id) return message.channel.send("I m sorry but You can't kill your-self") 

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author
  let answers = [
      'https://cdn.discordapp.com/attachments/704014536952250410/729686104227446804/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729686151132348446/image.gif',
    'https://media.discordapp.net/attachments/704014536952250410/729686281466150952/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729689195815108668/ahah.gif',
    'https://media.discordapp.net/attachments/704014536952250410/729690676815724554/1puch.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729686698430300252/image.gif',
    'https://media.discordapp.net/attachments/704014536952250410/729686798715846756/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729687174672416768/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729690613494186054/lol.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729687597328367616/image.gif',
    'https://cdn.weeb.sh/images/HyXTiyKw-.gif',
    'https://cdn.weeb.sh/images/BJO2j1Fv-.gif',


 ];
  let answer = answers[Math.floor(Math.random()*answers.length)];
            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setTitle("Kill")
                .setColor("RANDOM")
                .setImage(answer)
               .setDescription(`${message.author.username} Killes  ${member.user.username}`) 
               .setFooter(`Bot by ThunderOP`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

}