  
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "emojis",
  description: "View all emojis in the guild",
  category: "special",
  run: async (bot, message, args) => {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return bot.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
  
  let anmtEmbed = new MessageEmbed()
  .setTitle(`**Normal Emojis in ${message.guild.name}**`)
  .setDescription(`${Emojis}`)
  .setColor(`RANDOM`);
message.channel.send(anmtEmbed);

let Embed = new MessageEmbed()
.setTitle(`Animated Emojis in ${message.guild.name}.`)
.setDescription(
  `${EmojisAnimated} `)
.setColor(`RANDOM`);
message.channel.send(Embed);
  
  },
};