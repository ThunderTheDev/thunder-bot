const Discord = require("discord.js");

module.exports = {
  name: "dm",
  description: "DM a user in the guild",
  category: "moderation",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("I m sorry but You do not have enough permissions!");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `You did not mention a user, or you gave an invalid id`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("You did not specify your message");
      let dm = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
              .setTitle("THEIR IS A MESSAGE FOR YOU :)")
              .setColor("RANDOM")
              .addField("MODERATOR", `**<@!${message.author.id}>**`)           
              .setFooter(`Messaged By ${message.author.username}`)
              .setDescription(args.slice(1).join(" "))
  .setTimestamp()
      user.send(dm)
      .catch(() => message.channel.send("That user could not be DMed!"))
      .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
  },
};