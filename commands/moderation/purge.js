const Discord = require("discord.js");

module.exports = {
  name: "purge",
  description: "delete messages",
  category: "moderation",
  run: (client, message, args) => {

    const messageArray = message.content.split(' ');

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
     let purge = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
              .setTitle("PURGE")
              .setColor("RANDOM")
              .addField("MODERATOR", `**<@!${message.author.id}>**`)           
              .addField("NO. OF MESSAGES PURGED", `**${deleteAmount}**`)
              .setFooter(`Purged by ${message.author.username}`)
                .setTimestamp()
    message.channel.send(purge)({timeout: 7000});
  }
}