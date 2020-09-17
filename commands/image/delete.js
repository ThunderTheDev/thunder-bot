const Canvas = require("canvas");
const Discord = require('discord.js');
const fs = require("fs");
const canvacord = require("canvacord");

 module.exports = {
  name: "delete",
  category: "image",
  description: "Delete Meme",
  run: async (client, message, args) => {
    const text = args.join(" ");

        let avatar = message.mentions.users.displayAvatarURL || message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.delete(avatar);
        let attachment = new Discord.MessageAttachment(image, "deleted.png");
        return message.channel.send(attachment);
  }
}