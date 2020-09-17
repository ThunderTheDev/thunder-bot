const Discord = require('discord.js');
const googleIt = require('google-it')

module.exports = {
name: "search",
description: "Get the infonode . of anywhere",
category: "special",
usage: "search <>",
run: async (bot, message, args) => {
      if (!args[0]) return message.channel.send('You must send something first.')
      googleIt({'query': args.join(" "), 'limit': 7 }).then(results => {
        let text = '';
        let i = 0;
        for (const elements of Object.values(results)) {
          i++
          text += `${i}. [${elements.title}](${elements.link})\n${elements.snippet}\n\n`
        }
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setTitle('Google Search Results')
        .setDescription(text)
        .setFooter('Powered by Google-it')
        .addField('Link', 'https://www.google.com/search?q=' + args.slice(1).join("+"), true)
        .addField('Time', ((Date.now() - message.createdTimestamp) / 1000) + 's', true)
        .setTimestamp();
        message.channel.send(embed);
      }).catch(e => {
        message.channel.send('Something happened when searching. Here\'s a debug:' + e);
      })
    },
}