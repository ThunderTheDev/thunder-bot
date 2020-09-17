
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "bite",
  category: "fun",
  description: "Show ur feelings via this command xD",
  usage: "cry ",
  run: async (client, message, args) => {
       
 let user = message.mentions.users.first();
  if (message.mentions.users.size < 1)
    return message.reply("You must mention someone to bite them.");

        if(user.id === message.author.id) return message.channel.send("I m sorry but You cant Bite your-self") 


const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author
  let answers = [
    'https://media.discordapp.net/attachments/265156322012561408/729668194310029362/image.gif',
    'https://media.discordapp.net/attachments/265156322012561408/729668122935558144/image.gif',
    'https://media.discordapp.net/attachments/265156322012561408/729672631711694888/image.gif',
    'https://cdn.discordapp.com/attachments/265156322012561408/729672762888552498/image.gif',
    'https://media.discordapp.net/attachments/265156322012561408/729672986042564658/image.gif',
    'https://media.discordapp.net/attachments/265156322012561408/729672986042564658/image.gif',
    'https://media.discordapp.net/attachments/265156322012561408/729673422820474880/image.gif',
    'https://cdn.discordapp.com/attachments/265156322012561408/729673593272795206/image.gif',
    'https://media.discordapp.net/attachments/265156322012561408/729673921380745236/image.gif',
    'https://media.discordapp.net/attachments/265156322012561408/729674713554747403/image.gif',
    'https://media.discordapp.net/attachments/265156322012561408/729674744135286804/image.gif',
    'https://cdn.discordapp.com/attachments/265156322012561408/729674806886268988/image.gif',
    'https://images-ext-2.discordapp.net/external/Kz249RUB0zpd0vvKV9JBFUQj4Fkciux73GUPeqnyp6U/https/cdn.discordapp.com/emojis/693343804962504757.gif',
    'https://cdn.discordapp.com/emojis/468187236031004692.gif',
    'https://images-ext-1.discordapp.net/external/HNLs4qTkz-jOwbmOF9Knwzxpi7FoZV03VF47XE3SR_8/https/cdn.discordapp.com/emojis/680013625863176397.gif',
    'https://cdn.discordapp.com/attachments/704014536952250410/729683104775798884/image.gif',
 ];
  let answer = answers[Math.floor(Math.random()*answers.length)];
            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setTitle("Bite")
                .setColor("RANDOM")
                .setImage(answer)
               .setDescription(`${message.author.username} bites ${member.user.username}`) 
               .setFooter(`Bot by ThunderOP`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

}