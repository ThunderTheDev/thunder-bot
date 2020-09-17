
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "slap",
  category: "fun",
  description: "slap ur mates xd",
  usage: "slap ",
  run: async (client, message, args) => {
       
 let user = message.mentions.users.first();
  if (message.mentions.users.size < 1)
    return message.reply("You must mention someone to Slap them.");
        
if(user.id === message.author.id) return message.channel.send("I m sorry but You can't Slap your-self") 

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author
  let answers = [
    'https://cdn.discordapp.com/attachments/704014536952250410/729718890724196373/image.gif',
    'https://media.discordapp.net/attachments/704014536952250410/729719194811367454/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729719331369255042/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729719432858828830/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729719651264888842/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729719819745624114/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729719930009944124/image.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729720112579477514/image.gif',
    'https://cdn.weeb.sh/images/HyV5mJtDb.gif',
    'https://cdn.weeb.sh/images/ByHUMRNR-.gif',
    'https://cdn.weeb.sh/images/HJcoQ1Fwb.gif',
    'https://cdn.weeb.sh/images/Hkw1VkYP-.gif',


 ];
  let answer = answers[Math.floor(Math.random()*answers.length)];
            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setTitle("Slap")
                .setColor("RANDOM")
                .setImage(answer)
               .setDescription(`${message.author.username} Slaps  ${member.user.username}`) 
               .setFooter(`Bot by ThunderOP`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

}